function isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    let firstWordCount = {};
    let secondWordCount = {};
    for (let i = 0; i < s.length; i++) {
      firstWordCount[s[i]] = (firstWordCount[s[i]] || 0) + 1;
      secondWordCount[t[i]] = (secondWordCount[t[i]] || 0) + 1;
    }
    for (const key in firstWordCount) {
      if (firstWordCount[key] !== secondWordCount[key]) {
        return false;
      }
    }
    return true;
  }
  
  let s = "anagram";
  let t = "nagaram";
  console.log(isAnagram(s, t));
  