function split(string,mask) {
    const arrayOfString = string.split("");
    let sum = 0;
    for( value of mask){
        sum += value;
    }
    console.log(string.length);
    if(string === "" && mask === []){
        return []; 
    }
    else if(string.length !== sum){
        return null;
    }
    else{
        let holder;
        const container = mask.map((element, index, array) => {
        if(index === 0){
            holder = (arrayOfString.splice(0,element));
            return holder.join("");
        }
        holder = (arrayOfString.splice(0,element));
        return holder.join("");
        })
        return container;
    }
}

