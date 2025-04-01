

function isPalindrome(word) {
  //reverse the word 
  const reversedWord = word.split("").reverse().join("");
  //compare the reversed word with the original word 
  return word === reversedWord;
}
  /*
  pseudocode 
  - convert the string into an array characters 
  -reverse  the array
  -join the reversed array back into a string 
  -compare the reversed string into the original string 
  -
  if they are the same return true else false 
  */

  /* 
  explanations 
  -the function takes a word as input 
  -it splits the word into an array of characters 
  -it reverses the array and joins it back into a string 
  -it checks wether the reversed string is same as the original 
  -if they match then the function returns true, else false 
  */

// You can run `node index.js` to view these console logs
// test 
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
