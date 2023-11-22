/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
type CountType = {
  [key: string]: number;
};

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let firstWordCount: CountType = {};
  let secondWordCount: CountType = {};
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in firstWordCount)) {
      firstWordCount[s[i]] = 1;
    } else {
      firstWordCount[s[i]]++;
    }
    if (!(t[i] in secondWordCount)) {
      secondWordCount[t[i]] = 1;
    } else {
      secondWordCount[t[i]]++;
    }
  }
  const keys1 = Object.keys(firstWordCount);
  const keys2 = Object.keys(secondWordCount);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (firstWordCount[key] !== secondWordCount[key]) {
      return false;
    }
  }
  return true;
}
// What is an anagram? It means that the 2 strings have the same number of each letter
// Let us get the counts of letters
let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t));
