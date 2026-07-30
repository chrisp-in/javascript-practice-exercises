function add(arr) {
 let result = [];
 arr.forEach((num , index, array)=> {
    let sum = num;
    for(let i = 1; i <= index; i++){
        sum += array[index-i];
    }
    result.push(sum);
 });
 return result;
}
console.log(add([1,2,3,4,5]));
