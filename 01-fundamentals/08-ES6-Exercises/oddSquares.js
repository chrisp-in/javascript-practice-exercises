function oddSquares(...array){
    const filteredValues = array.filter(element => element % 2 !== 0);
    return filteredValues.map(element => element ** 2);
}
console.log(oddSquares(1, 2, 3, 4, 5, 6));