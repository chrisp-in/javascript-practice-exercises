function findProperty(array,property,value){
    let objectCollecttion = [];

    array.forEach(object => {
        if(object[property] === value){
            objectCollecttion.push(object);
        }
});
if(objectCollecttion.length === 0){
    return [];
}
return objectCollecttion;
}
const users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "David", age: 20 }
];

console.log(findProperty(users, "age", 20));