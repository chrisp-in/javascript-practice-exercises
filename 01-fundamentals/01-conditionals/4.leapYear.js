// check if year is a leap year
function leapYear(year){
  if(year % 4 === 0 ){
    if (year % 100 !== 0){
      return true;
    }
    else {
      if(year % 400 !== 0){
        return false;
            }
      else if(year % 400 === 0){
        return true;
            }
          }
       }
    }
   if(leapYear(2024)){
    console.log("Is a leap year");
   }
   else {
    console.log("Is not a leap year");
   }