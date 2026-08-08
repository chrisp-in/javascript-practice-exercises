function countDirectionChanges(readings) {
  let count = 0;
  const holder = [];
  let previous;
  for (const reading of readings){
    if( previous !== undefined){
      if(previous === reading){
        continue;
      }
      else if(previous < reading){
        holder.push("increasing");
      }
      else{
        holder.push("decreasing");
      }
    }
    previous = reading;
  }
  previous = undefined;
  for(const value of holder){
    if(previous !== undefined){
      if(previous !== value){
        count++;
      }
      
    }
    previous = value;
  }
  return count;
}
