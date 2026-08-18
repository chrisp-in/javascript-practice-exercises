let sum = 0;
function statistics(...values){
    const functionSum = () => {
        for(const value of values){
            sum += value;
        }
        return sum;
    }
    const functionAverage = () =>{
        return Math.ceil(sum/values.length.toFixed(2));
    }
    const functionMax = () =>{
        return Math.max(...values);
    }
    const functionMin = () =>{
        return Math.min(...values);
    }
    return{
       sum: functionSum(),
       average: functionAverage(),
       max: functionMax(),
       min: functionMin()
    }
}
