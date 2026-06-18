const palindrome = word =>{
  let wordInReverse = [];
  for (let i = word.length - 1; i >= 0; i--){
    wordInReverse.push(word[i]);
  }
  if (wordInReverse.join("") === word ){
    return "Is a palindrome"
  }
  else{
    return "Is not a palindrome"
  }
} 
console.log(palindrome("chrispin"));
