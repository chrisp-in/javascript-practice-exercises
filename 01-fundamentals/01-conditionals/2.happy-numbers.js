function happyNumber(num){
  let sum = 0;
  let stringNumber = num.toString();
  for (let i = 0; i < stringNumber.length; i++){
      sum += Math.pow(Number(stringNumber[i]),2);
  }
  return sum;
}
function isHappyNumber(value){
let current = value;
let seen = [];
do{
    if(seen.includes(current)){
    return "The number is not a happynumber"
  }
  seen.push(current)
  current = happyNumber(current);
}
while(current !== 1)
return `${value} is a happy number`;
}
console.log(isHappyNumber(19));
