let button = document.getElementById("btn");
button.addEventListener('click' , function(event){
    let list = document.createElement("li");
    let lu = document.getElementById("myList");
    list.innerHTML="<h1>HI</h1>";
    lu.appendChild(list);
})