// program for combining words in a string
const stringCombinations = word =>{
  let stringCombinationsArr = [];
  for (let i = 0; i < word.length; i++){
    for(let j = i+1; j <= word.length; j++){
      stringCombinationsArr.push(word.slice(i,j));
    }
  }
  return stringCombinationsArr.join(",");
}
console.log(stringCombinations("dog"));