function diceRotation(array){
  const opposite = {
  1:6,
  2:5,
  3:4,
  6:1,
  5:2,
  4:3
  };
  let minimumRotationsRequired = Infinity;
  for(let target = 1; target <= 6; target++){
    let totalCountRotations = 0;
    for(const face of array){
      if(face === target){
        totalCountRotations += 0;
      }
      else if(face === opposite[target]){
        totalCountRotations += 2;
      }
      else{
        totalCountRotations += 1;
      }
    }
    minimumRotationsRequired = Math.min(minimumRotationsRequired,totalCountRotations)
  }
  return minimumRotationsRequired;
}