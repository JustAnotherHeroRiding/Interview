"use strict";
function groupAnagrams(strs) {
    let result = [];
    if (strs.length == 1) {
        return [strs];
    }
    return result;
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let empty = [""];
console.log(groupAnagrams(empty));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
