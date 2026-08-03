// Write a function sumUnique that takes an array of numbers as an argument and returns 
// the sum of the elements that appear only once in the array.
// sumUnique([1, 2, 2, 3, 4, 4, 5]) // 1 + 3 + 5 => 9
// sumUnique([10, 20, 20, 30, 40, 40, 50]) // 10 + 30 + 50 => 90
// sumUniquey([5, 5, 10, 15, 20, 25, 25]) // 10 + 15 + 20 => 45
const sumUnique = array => {
  let sortedArray = array.sort();
  let sum = 0;
  let splicedElement = [];
  let reducedArray = sortedArray.reduce((accumulator,currentElement,index,array) => {
     for(let i = index + 1; i <= array.length; i++){
      if(currentElement === array[i]){
       splicedElement.push(...array.splice(i,1)); 
      }
      else{
        accumulator.push(currentElement);
        break;
      }   
     }
     return accumulator;
  },[]);
  let result = reducedArray.filter((Element) => {
    return !splicedElement.includes(Element);
  });
  result.map(element => {
      return sum += element;
  }); 
  return sum;
}
console.log(sumUnique([5, 5, 10, 15, 20, 25, 25]));
