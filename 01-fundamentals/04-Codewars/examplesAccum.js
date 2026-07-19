// The TaskWrite a function that takes a string of letters, and outputs a new string where each letter is repeated according to its position (1-indexed), with the first letter of each segment capitalized.

// Examplesaccum("abcd") → "A-Bb-Ccc-Dddd"accum("RqaEzty") → "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" 

function examplesAccum(string){
     return string.split("").map((element , index) => { 
       return element[0].toUpperCase() + element.repeat(index + 1).slice(1);
     }).join('-');
   
    
    

}
console.log(examplesAccum("abcd"));