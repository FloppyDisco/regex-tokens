module.exports = [
  {
    group: "Meta Characters",
    children: [
      { token: "\\d", description: "Matches any digit (equivalent to [0-9])." },
      { token: "\\D", description: "Matches any non-digit (equivalent to [^0-9])." },
      { token: "\\w", description: "Matches any word character (alphanumeric + underscore, equivalent to [a-zA-Z0-9_])." },
      { token: "\\W", description: "Matches any non-word character (equivalent to [^a-zA-Z0-9_])." },
      { token: "\\s", description: "Matches any whitespace character (spaces, tabs, line breaks)." },
      { token: "\\S", description: "Matches any non-whitespace character." },
      { token: "\\b", description: "Matches a word boundary." },
      { token: "\\B", description: "Matches a non-word boundary." },
      { token: "\\n", description: "Matches a newline character (line feed)." },
      { token: "\\r", description: "Matches a carriage return character." },
      { token: "\\f", description: "Matches a form feed character." },
      { token: "\\t", description: "Matches a tab character." },
      { token: "\\v", description: "Matches a vertical tab character." },
      { token: "\\0", description: "Matches a null character." },
      { token: "\\xNN", description: 'Matches a character with hexadecimal value NN (e.g., \\x41 for "A").' },
      { token: "\\uNNNN", description: "Matches a character with Unicode code point NNNN." },
    ],
  },

  {
    group: "Anchors",
    children: [
      { token: "^", description: "Anchors the regex at the beginning of a string." },
      { token: "$", description: "Anchors the regex at the end of a string." },
      { token: "\\b", description: "Word boundary. Matches a position between a word character and a non-word character." },
      { token: "\\B", description: "Non-word boundary. Matches a position where a word character is not adjacent to a non-word character." },
      { token: "\\A", description: "Anchors the regex at the start of the string (independent of multiline flag)." },
      { token: "\\Z", description: "Anchors the regex at the end of the string (independent of multiline flag)." },
      { token: "\\z", description: "Anchors the regex at the end of the string, ensuring no newline follows." },
      { token: "\\G", description: "Matches the position where the last match ended, useful in global matching." },
      { token: "(?<=...)", description: "Positive lookbehind. Matches a group only if preceded by a pattern." },
      { token: "(?<!...)", description: "Negative lookbehind. Matches a group only if NOT preceded by a pattern." },
      { token: "(?=...)", description: "Positive lookahead. Matches a group only if followed by a pattern." },
      { token: "(?!...)", description: "Negative lookahead. Matches a group only if NOT followed by a pattern." },
    ],
  },

  {
    group: "Quantifiers",
    children: [
      { token: "*", description: "Matches 0 or more of the preceding element." },
      { token: "+", description: "Matches 1 or more of the preceding element." },
      { token: "?", description: "Matches 0 or 1 of the preceding element (optional)." },
      { token: "{n}", description: "Matches exactly (n) occurrences of the preceding element." },
      { token: "{n,}", description: "Matches (n) or more occurrences of the preceding element." },
      { token: "{n,m}", description: "Matches between (n) and ? occurrences of the preceding element." },
      { token: "*?", description: "Non-greedy version of *, matches as few as possible." },
      { token: "+?", description: "Non-greedy version of +, matches as few as possible." },
      { token: "??", description: "Non-greedy version of ?, matches as few as possible." },
      { token: "{n,m}?", description: "Non-greedy version of {n,m}, matches as few as possible." },
    ],
  },

  {
    group: "Character Classes",
    children: [
      { token: "[abc]", description: "Matches any one of the characters a, b, or c." },
      { token: "[^abc]", description: "Matches any character except a, b, or c (negation)." },
      { token: "[a-z]", description: "Matches any lowercase letter from a to z." },
      { token: "[A-Z]", description: "Matches any uppercase letter from A to Z." },
      { token: "[0-9]", description: "Matches any digit from 0 to 9." },
      { token: "[a-zA-Z]", description: "Matches any letter, either lowercase or uppercase." },
      { token: "[[:alnum:]]", description: "Matches any alphanumeric character (equivalent to [a-zA-Z0-9])." },
      { token: "[[:alpha:]]", description: "Matches any alphabetic character (equivalent to [a-zA-Z])." },
      { token: "[[:digit:]]", description: "Matches any digit (equivalent to [0-9])." },
      { token: "[[:space:]]", description: "Matches any whitespace character (equivalent to [\\t\\n\\r\\f\\v])." },
      { token: "[[:upper:]]", description: "Matches any uppercase letter (equivalent to [A-Z])." },
      { token: "[[:lower:]]", description: "Matches any lowercase letter (equivalent to [a-z])." },
    ],
  },

  {
    group: "Capture Groups",
    children: [
      { token: "(...)", description: "Capturing group. It groups part of the regex for applying quantifiers or extracting parts of the match." },
      { token: "?:", description: "Non-capturing group. Groups part of the regex without capturing it for back-referencing." },
      { token: "?=", description: "Positive lookahead. Ensures that a specific pattern follows, but does not consume characters." },
      { token: "?!", description: "Negative lookahead. Ensures that a specific pattern does not follow." },
      { token: "(?:...)", description: "Non-capturing group. Groups part of the regex but does not create a backreference." },
      { token: "()|()", description: "Alternation (OR operator). Allows one of several options to match." },
      { token: "(?<=...)", description: "Positive lookbehind. Ensures that a specific pattern precedes." },
      { token: "(?<!...)", description: "Negative lookbehind. Ensures that a specific pattern does not precede." },
    ],
  },
];
