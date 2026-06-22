// program to write a sorted array alpabetically
const sortAlphabetically = array =>{
 let arrayToSort = array.split("");
 console.log(arrayToSort.sort().join(""));
}
sortAlphabetically("webmaster");
