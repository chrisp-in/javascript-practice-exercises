//for better visibility I will use underscores
 let shuttleSpeed = 17_500;// in mph
 const distanceToMars = 225_000_000; // in km
 const distanceToTheMoon = 384_400;//in km
 let milesPerKilometer = 0.621;
 let nameOfTheSpaceShuttle = "Determination";
 console.log(typeof shuttleSpeed);
 console.log(typeof distanceToMars);
 console.log(typeof distanceToTheMoon);
 console.log(typeof milesPerKilometer);

 //trip to mars
 let milesToMars = distanceToMars * milesPerKilometer;
 let hoursToMars = milesToMars / shuttleSpeed;
 let daysToMars = hoursToMars / 24;

 console.log(`${nameOfTheSpaceShuttle} will take ${daysToMars.toLocaleString()} days to reach Mars`);

// trip to the moon
let milesToTheMoon = distanceToTheMoon * milesPerKilometer;
let hoursToTheMoon = milesToTheMoon / shuttleSpeed;
let daysToTheMoon = hoursToTheMoon / 24;

console.log(`${nameOfTheSpaceShuttle} will take ${daysToTheMoon.toLocaleString()} days to reach the Moon`);