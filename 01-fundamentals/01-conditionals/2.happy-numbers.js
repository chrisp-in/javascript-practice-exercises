// finding the first five happy numberscom
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
    return false;
  }
  seen.push(current)
  current = happyNumber(current);
}
while(current !== 1)
return true;
}
// finding the first five happy numbers
let counter = 1;
let fiveFirstHappyNumbers = [];
while(fiveFirstHappyNumbers.length <= 5){
  isHappyNumber(counter);
  if(isHappyNumber(counter)){
    fiveFirstHappyNumbers.push(counter);  
  }
  counter++;
}
for (let i = 0; i < 5; i++)
{
  console.log(fiveFirstHappyNumbers[i]);
}
