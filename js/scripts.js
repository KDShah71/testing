
var x = document.getElementById("button");
var y = document.getElementById("box");


x.addEventListener("mouseover", mouseOverFunction);
x.addEventListener("click", clickFunction);
x.addEventListener("mouseout", mouseOutFunction);
x.addEventListener("dblclick", dblclickFunction);
x.addEventListener("wheel", wheelFunction);

function mouseOverFunction() {
    document.getElementById("test").innerHTML += "Moused over!<br>";
}

function clickFunction() {
    document.getElementById("test").innerHTML += "Clicked!<br>";
}

function mouseOutFunction() {
    document.getElementById("test").innerHTML += "Moused out!<br>";
}

function dblclickFunction() {
    document.getElementById("test").innerHTML += "Double-Clicked!<br>";
}

function wheelFunction() {
    document.getElementById("test").innerHTML += "wheel rolled!<br>";
}
