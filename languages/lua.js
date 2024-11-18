module.exports = [
  {
    group : "Meta Characters",
    children :[
      { token : ".", description : "Any single character, except newline." },
      { token : "%a", description : "Any letter (a-z, A-Z)." },
      { token : "%A", description : "Any non-letter character." },
      { token : "%d", description : "Any digit (0-9)." },
      { token : "%D", description : "Any non-digit character." },
      { token : "%s", description : "Any whitespace character (spaces, tabs, etc.)." },
      { token : "%S", description : "Any non-whitespace character." },
      { token : "%w", description : "Any alphanumeric character (letters and digits)." },
      { token : "%W", description : "Any non-alphanumeric character." },
      { token : "%x", description : "Any hexadecimal digit (0-9, a-f, A-F)." },
      { token : "%X", description : "Any non-hexadecimal character." },
      { token : "%p", description : "Any punctuation character." },
      { token : "%P", description : "Any non-punctuation character." },
      { token : "%c", description : "Any control character." },
      { token : "%C", description : "Any non-control character." },
      { token : "%z", description : "The null character (ASCII 0)." },
      { token : "%bxy", description : "Balanced match between x and y." },
    ],
  },

  {
    group : "Anchors",
    children : [
      { token : "^", description : "Matches the beginning of the string." },
      { token : "$", description : "Matches the end of the string." },
    ],
  },

  {
    group : "Quantifiers",
    children :[
      { token : "x*", description : "Matches 0 or more occurrences of x." },
      { token : "x+", description : "Matches 1 or more occurrences of x." },
      { token : "x-", description : "Matches 0 or more occurrences of x (non-greedy)." },
      { token : "x?", description : "Matches 0 or 1 occurrence of x." },
      { token : "x{n}", description : "Matches exactly n occurrences of x." },
      { token : "x{n,}", description : "Matches at least n occurrences of x." },
      { token : "x{n,m}", description : "Matches between n and m occurrences of x." },
    ],
  },

  {
    group : "Character Classes",
    children :[
      { token : "[abc]", description : "Matches any one of the characters a, b, or c." },
      { token : "[^abc]", description : "Matches any character except a, b, or c." },
      { token : "[a-z]", description : "Matches any character in the range a-z." },
      { token : "[^A-Z]", description : "Matches any character not in the range A-Z." },
      { token : "[a-zA-Z0-9]", description : "Matches any character in the combined ranges a-z, A-Z, 0-9." },
    ]
  },

  {
    group : "Escape Sequences",
    children : [
      { token : "%.", description : "Matches the literal '.' character." },
      { token : "%(", description : "Matches the literal '(' character." },
      { token : "%)", description : "Matches the literal ')' character." },
      { token : "%[", description : "Matches the literal '[' character." },
      { token : "%]", description : "Matches the literal ']' character." },
      { token : "%*", description : "Matches the literal '*' character." },
      { token : "%+", description : "Matches the literal '+' character." },
      { token : "%-", description : "Matches the literal '-' character." },
      { token : "%?", description : "Matches the literal '?' character." },
      { token : "%%", description : "Matches the literal '%' character." },
    ]
  }
]
