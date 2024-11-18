const vscode = require("vscode");
const package = require("./package.json");

const viewContainerId = package.contributes.viewsContainers.activitybar[0].id;
const views = {
  _activeView: "javascript",
  get activeView(){return this._activeView},
  set activeView(view){this._activeView = view},
  ids: package.contributes.views[viewContainerId].map((view) => view.id),
};

const languages = views.ids.reduce((languages, id)=> ({
  ...languages,
  [id]: require(`./languages/${id}`)
}),{})


//   Toggling Groups
// -------------------

let isFlatTree;
function setIsFlatTree(bool){
  isFlatTree = bool;
  vscode.commands.executeCommand("setContext", package.settings.when.isFlatTree, bool)
  views[views.activeView].provider.refresh()
}

//   Tree
// --------

class RegexTreeProvider {
  constructor(tokenGroups) {
    this.tokenGroups = tokenGroups;
    this._onDidChangeTreeData = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;
  }

  getChildren(element) {
    return element
      ? element.children
      : isFlatTree
        ? this.tokenGroups.reduce((tokens, group) => [...tokens, ...this.getChildren(group)],[])
        : this.tokenGroups.map(group => ({...group, state: vscode.TreeItemCollapsibleState.Collapsed}))
  }

  getTreeItem(element) {
    return new RegexTreeItem(element)
  }

  refresh(){
    this._onDidChangeTreeData.fire()
  }
}

const copyToken = package.settings.commands.copyToken
class RegexTreeItem extends vscode.TreeItem {
  constructor({group, token, copyValue, description, state}) {
    super(group || token, state);
    this.token = copyValue || token
    this.tooltip = description;
    this.description = description;

    this.command = {
      command: copyToken,
      arguments: [this]
    }
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(

    vscode.commands.registerCommand(
      package.settings.commands.setFlatTree, () => {
        setIsFlatTree(true);
    }),

    vscode.commands.registerCommand(
      package.settings.commands.setNestedTree, () => {
        setIsFlatTree(false);
    }),

    vscode.commands.registerCommand(
      package.settings.commands.showTokens, () => {
        vscode.commands.executeCommand("workbench.view.extension.regexTokens")
        vscode.commands.executeCommand("workbench.action.findInFiles")
    }),

    vscode.commands.registerCommand(
      package.settings.commands.copyToken, ({ token, collapsibleState }={}) => {
        if (collapsibleState){
          vscode.commands.executeCommand("list.expand")
        } else {
          if(token){
            vscode.env.clipboard.writeText(token);
          }
        }
      }
    )

  ); // subscriptions

  // register all the contributed treeviews
  for (id of views.ids) {
    const provider = new RegexTreeProvider(languages[id]);
    const tree = vscode.window.createTreeView(id, {
      treeDataProvider: provider,
    })

    // for some reason the func MUST be created and closed at registration
    // it does not work if it is generated inside onDidChangeVisibility
    const hideOtherViews = hideViewsOtherThanId(id)
    tree.onDidChangeVisibility((e) => hideOtherViews(e))

    // store the reference to the treeviews
    views[id] = {
      tree,
      provider,
    }
  }

  function hideViewsOtherThanId(id){
    return function ({visible}){
      if (visible){
        vscode.commands.executeCommand('setContext', package.settings.when.tokensVisible, visible)
        views.activeView = id
        views.ids.forEach(view => {
          if (view !== views.activeView){
            vscode.commands.executeCommand(`${view}.removeView`)
          }
        })
      } else {
        if (id === views.activeView){
          vscode.commands.executeCommand('setContext', package.settings.when.tokensVisible, visible)
        }
      }
    }
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
