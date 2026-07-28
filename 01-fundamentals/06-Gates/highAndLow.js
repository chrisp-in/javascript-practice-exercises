// Write a function that takes in an array of digits and return the highest 
// and lowest digits from it. Solve it without using `Math.max()` and `Math.min()`

// ```jsx
// highAndLow([1, 2, 3, 4, 5]);  // return 5 1
// highAndLow([1, 2, -3, 4, 5]); // return 5 -3
// highAndLow([1, 9, 3, 4, -5]); // return 9 -5
// ```
function highAndLow(array){
  let min = array[0];
  let max = array[0];
  let result = [];
  for(let i = 1; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
    if(array[i] < min){
        min = array[i]
    }
  }
  result.push(max);
  result.push(min);
  return result.toString();
}
console.log(highAndLow([1, 9, 3, 4, -5]));