// Program to generate the longest word in a string
const longestWord = string =>{
  let stringArray = string.split(" ");
  let currentLargestWord = stringArray[0];
  for(let i = 1; i < stringArray.length;i++){
    if(stringArray[i].length > currentLargestWord.length){
      currentLargestWord = stringArray[i];
    }
}
return currentLargestWord;
}
console.log(longestWord(" Web development tutorial"));