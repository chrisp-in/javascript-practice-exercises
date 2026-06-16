let x = 0;
let y = -1;
let z = 4;

// sort in descending order
if (z > y && z > x){
    if (y > x){
        alert(`${z}, ${y}, ${x}`);
    } else {
        alert(`${z}, ${x}, ${y}`);
    }
}
else if (y > z && y > x){
    if (z > x){
        alert(`${y}, ${z}, ${x}`);
    }
    else {
        alert(`${y}, ${x}, ${z}`);
    }
}
else {
    if (z > y){
        alert(`${x}, ${z}, ${y}`);
    }
    else {
        alert(`${x}, ${y}, ${z}`);
    }
}

