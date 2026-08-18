Array.prototype.myMap = function(callback){
    let newArray = [];
    let holder;

    for(let i = 0; i < this.length; i++){
       holder = callback(this[i]);
       newArray.push(holder);
    }
    return newArray;
}
const number = [1,2,3,4]; 
const output = number.myMap(element => element ** 2);
console.log(output);