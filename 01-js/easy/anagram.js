/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!==str2.length){
        
    return false;
}
else{
    const str1Lower = str1.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const str2Lower =  str2.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const str1Sorted = str1Lower.split("").sort().join("");
    const str2Sorted = str2Lower.split("").sort().join("");

    return str1Sorted === str2Sorted;
}
}

module.exports = isAnagram;


