Array.prototype.myMap = function(){
  let newArray = [];
  for(let i = 0; i < this.length; i++){
    newArray.push(this[i] * 2);
  }
  return newArray;
}
let numbers = [1,2,3,5];
console.log(numbers.myMap());
  
