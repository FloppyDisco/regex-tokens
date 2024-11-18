module.exports = [
  {
    group: "Meta Characters",
    children: [
      { token: ".", description: "Any Single Character." },
      { token: "a|b", copyvalue: "|", description: "Alternate - either a or b." },
      { token: "\\", description: "Make any character literal." },
      { token: "\\d", description: "Any digit (equivalent to [0-9])." },
      { token: "\\D", description: "Any non-digit (equivalent to [^0-9])." },
      { token: "\\w", description: "Any word character (alphanumeric + underscore, equivalent to [a-zA-Z0-9_])." },
      { token: "\\W", description: "Any non-word character (equivalent to [^a-zA-Z0-9_])." },
      { token: "\\s", description: "Any whitespace character (spaces, tabs, line breaks)." },
      { token: "\\S", description: "Any non-whitespace character." },
      { token: "\\n", description: "A newline character (line feed)." },
      { token: "\\r", description: "A carriage return character." },
      { token: "\\f", description: "A form feed character." },
      { token: "\\t", description: "A tab character." },
      { token: "\\v", description: "A vertical tab character." },
      { token: "\\#", description: "Subpattern number #." },
      { token: "\\p{...}", copyValue: "\\p{}", description: "Unicode property or script category." },
      { token: "\\P{...}", copyValue: "\\P{}", description: "negation of \\p." },
      { token: "\\k<name>", copyValue: "\\k", description: "subpattern 'name'." },
      { token: "\\uYYYY", copyValue: "\\u", description: "Hex character YYYY." },
      { token: "\\xYY", copyValue: "\\x", description: "Hex character YY." },
      { token: "\\ddd", copyValue: "\\", description: "Octal character ddd." },
      { token: "\\cY", copyValue: "\\c", description: "Control character Y." },
      { token: "[\\b]", description: "Backspace character." },
    ],
  },

  {
    group: "Anchors",
    children: [
      { token: "^", description: "Anchors the regex at the beginning of a string." },
      { token: "$", description: "Anchors the regex at the end of a string." },
      { token: "\\b", description: "Word boundary. A position between a word character and a non-word character." },
      { token: "\\B", description: "Non-word boundary. A position where a word character is not adjacent to a non-word character." },
    ],
  },

  {
    group: "Quantifiers",
    children: [
      { token: "a?", copyValue: "?", description: "0 or 1 of a(optional)." },
      { token: "a*", copyValue: "*", description: "0 or more of a." },
      { token: "a+", copyValue: "+", description: "1 or more a." },
      { token: "a{n}", copyValue: "{}", description: "Exactly (n) occurrences of a." },
      { token: "a{n,}", copyValue: "{,}", description: "(n) or more occurrences of a." },
      { token: "a{n,m}", copyValue: "{,}", description: "Between (n) and (m) occurrences of a." },
      { token: "*?", description: "Non-greedy version of *, matches as few as possible." },
      { token: "+?", description: "Non-greedy version of +, matches as few as possible." },
      { token: "{n,m}?", copyValue: "{}?", description: "Non-greedy version of {n,m}, matches as few as possible." },
    ],
  },

  {
    group: "Character Classes",
    children: [
      { token: "[abc]", copyValue: "[]", description: "Any one of the characters a, b, or c." },
      { token: "[^abc]", copyValue: "[^]", description: "Any character except a, b, or c (negation)." },
      { token: "[a-z]", copyValue: "[-]", description: "Any character within a range." },
      { token: "[^A-Z]", copyValue: "[^-]", description: "Any character not within a range." },
      { token: "[a-zA-Z0-9]", copyValue: "[-]", description: "Any character from all ranges." },
    ],
  },

  {
    group: "Capture Groups",
    children: [
      { token: "(...)", copyValue: "()", description: "Capture everything enclosed." },
      { token: "(?:...)", copyValue: "(?:)", description: "Non-capturing group. Match everything enclosed but do not capture it." },
      { token: "(?<=...)", copyValue: "(?<=)", description: "Positive lookbehind. Match only if preceded by the enclosed pattern." },
      { token: "(?<!...)", copyValue: "(?<!)", description: "Negative lookbehind. Match only if NOT preceded by the enclosed pattern." },
      { token: "(?=...)", copyValue: "(?=)", description: "Positive lookahead. Match only if followed by the enclosed pattern." },
      { token: "(?!...)", copyValue: "(?!)", description: "Negative lookahead. Match only if NOT followed by the enclosed pattern." },
    ],
  },

  {
    group: "Substitutions",
    children: [
      { token: "$1", copyValue: "$", description: "Replace with the contents of capture group 1." },
      { token: "$$", copyValue: "$$", description: "Insert a literal dollar sign ($)." },
      { token: "$`", description: "Contents before the match." },
      { token: "$'", description: "Contents after the match." },
      { token: "$&", description: "Complete match contents." },
    ],
  },
];
