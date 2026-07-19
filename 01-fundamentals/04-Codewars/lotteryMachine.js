function lottery(str){
   let filtering = str.split("").filter((element, index, str) => {
    let num = Number(element);
     return Number.isNaN(num) === false;
   });
   return filtering.length === 0? "One more run": [...new Set(filtering)].join("");
}
console.log(lottery("555"));
