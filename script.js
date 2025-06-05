const questions = {
   easy: [
    {
      q: "Reverse a String",
      hint: "Use a loop or StringBuilder.reverse().",
      answer: `String str = "hello";\nString reversed = new StringBuilder(str).reverse().toString();\nSystem.out.println(reversed);`
    },
    {
      q: "Count Vowels and Consonants",
      hint: "Check each character against vowels.",
      answer: `String s = "Java".toLowerCase();\nint v = 0, c = 0;\nfor (char ch : s.toCharArray()) {\n  if ("aeiou".indexOf(ch) != -1) v++;\n  else if (Character.isLetter(ch)) c++;\n}\nSystem.out.println("Vowels: " + v + ", Consonants: " + c);`
    },
    {
      q: "Check if a String is Palindrome",
      hint: "Compare with reversed string.",
      answer: `String s = "madam";\nboolean isPalin = s.equals(new StringBuilder(s).reverse().toString());\nSystem.out.println(isPalin);`
    },
    {
      q: "Remove All Whitespaces",
      hint: "Use replaceAll(\"\\\\s\", \"\").",
      answer: `String input = "Hello World";\nSystem.out.println(input.replaceAll("\\\\s", ""));`
    },
    {
      q: "Toggle Case of Each Character",
      hint: "Use Character methods.",
      answer: `String s = "JaVa";\nStringBuilder result = new StringBuilder();\nfor (char ch : s.toCharArray()) {\n  result.append(Character.isUpperCase(ch) ? Character.toLowerCase(ch) : Character.toUpperCase(ch));\n}\nSystem.out.println(result);`
    }
  ],
  medium: [
    {
      q: "Find First Non-Repeating Character",
      hint: "Use LinkedHashMap to preserve order.",
      answer: `String s = "aabbcde";\nMap<Character, Integer> map = new LinkedHashMap<>();\nfor (char ch : s.toCharArray()) map.put(ch, map.getOrDefault(ch, 0) + 1);\nfor (char ch : map.keySet()) {\n  if (map.get(ch) == 1) {\n    System.out.println(ch);\n    break;\n  }\n}`
    },
    {
      q: "Check Anagram",
      hint: "Sort and compare both strings.",
      answer: `String a = "listen", b = "silent";\nchar[] a1 = a.toCharArray(), b1 = b.toCharArray();\nArrays.sort(a1); Arrays.sort(b1);\nSystem.out.println(Arrays.equals(a1, b1));`
    },
    {
      q: "Character Frequency Counter",
      hint: "Use HashMap to store character counts.",
      answer: `String s = "apple";\nMap<Character, Integer> map = new HashMap<>();\nfor (char ch : s.toCharArray()) map.put(ch, map.getOrDefault(ch, 0) + 1);\nSystem.out.println(map);`
    },
    {
      q: "Print All Substrings",
      hint: "Use two loops and substring method.",
      answer: `String s = "abc";\nfor (int i = 0; i < s.length(); i++) {\n  for (int j = i + 1; j <= s.length(); j++) {\n    System.out.println(s.substring(i, j));\n  }\n}`
    },
    {
      q: "Check if Two Strings are Rotations",
      hint: "Concatenate one string and check contains.",
      answer: `String a = "abcde", b = "deabc";\nSystem.out.println((a.length() == b.length()) && (a + a).contains(b));`
    }
  ],
  hard: [
    {
      q: "Check Isomorphic Strings",
      hint: "Map characters and check consistency.",
      answer: `String s = "egg", t = "add";\nMap<Character, Character> map = new HashMap<>();\nSet<Character> set = new HashSet<>();\nboolean isIso = true;\nfor (int i = 0; i < s.length(); i++) {\n  char a = s.charAt(i), b = t.charAt(i);\n  if (map.containsKey(a)) {\n    if (map.get(a) != b) isIso = false;\n  } else {\n    if (set.contains(b)) isIso = false;\n    map.put(a, b); set.add(b);\n  }\n}\nSystem.out.println(isIso);`
    },
    {
      q: "Longest Palindromic Substring",
      hint: "Expand around each center.",
      answer: `// Call: longestPalindrome("babad")\npublic static String longestPalindrome(String s) {\n  String res = "";\n  for (int i = 0; i < s.length(); i++) {\n    res = longer(res, expand(s, i, i));\n    res = longer(res, expand(s, i, i+1));\n  }\n  return res;\n}\nstatic String expand(String s, int l, int r) {\n  while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }\n  return s.substring(l + 1, r);\n}\nstatic String longer(String a, String b) {\n  return a.length() > b.length() ? a : b;\n}`
    },
    {
      q: "Run-Length Encoding (String Compression)",
      hint: "Count consecutive chars.",
      answer: `String s = "aaabbc";\nStringBuilder res = new StringBuilder();\nint count = 1;\nfor (int i = 1; i < s.length(); i++) {\n  if (s.charAt(i) == s.charAt(i - 1)) count++;\n  else {\n    res.append(s.charAt(i - 1)).append(count);\n    count = 1;\n  }\n}\nres.append(s.charAt(s.length() - 1)).append(count);\nSystem.out.println(res);`
    },
    {
      q: "Minimum Deletions to Make Anagram",
      hint: "Subtract character counts.",
      answer: `String a = "bcadeh", b = "hea";\nint[] freq = new int[26];\nfor (char c : a.toCharArray()) freq[c - 'a']++;\nfor (char c : b.toCharArray()) freq[c - 'a']--;\nint deletions = 0;\nfor (int f : freq) deletions += Math.abs(f);\nSystem.out.println(deletions);`
    },
    {
      q: "All Permutations of a String",
      hint: "Use recursion and backtracking.",
      answer: `public static void permute(String str, String result) {\n  if (str.length() == 0) {\n    System.out.println(result);\n    return;\n  }\n  for (int i = 0; i < str.length(); i++) {\n    permute(str.substring(0, i) + str.substring(i + 1), result + str.charAt(i));\n  }\n}\n// Call using: permute("abc", "");`
    }
  ]
};


function createCard(qObj) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${qObj.q}</h3>
    <button onclick="toggle(this)">Show Hint</button>
    <div class="code-block">${qObj.hint}</div>
    <button onclick="toggle(this)">Show Answer</button>
    <div class="code-block">${qObj.answer}</div>
  `;

  return card;
}

function toggle(button) {
  const block = button.nextElementSibling;
  block.style.display = block.style.display === "block" ? "none" : "block";
}

function renderQuestions() {
  for (let level in questions) {
    const container = document.getElementById(level);
    questions[level].forEach(qObj => {
      const card = createCard(qObj);
      container.appendChild(card);
    });
  }
}

function unlockTest() {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();

  if (hr > 14 || (hr === 14 && min >= 10)) {
    document.getElementById("locked-msg").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    renderQuestions();
  }
}

unlockTest();

