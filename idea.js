//main body
let form = document.createElement('h1');

form.innerHTML = "Does the button has onclick attribute? ";

document.getElementById("main-body").appendChild(form);

form.setAttribute("class", "mtext")

//button
let form1 = document.createElement("button");

form1.innerHTML = "click me";

document.getElementById("main-body").append(form1)

form1.setAttribute("class", "button1");

form1.addEventListener("click", clickme1);

function clickme1() {
    alert("Do I have attribute?");
}



//answers
let im = document.getElementById("main-body");

im.insertAdjacentHTML("beforeend", ' <br><img class="tick" onclick="check1()" src="tick.png"></img>');
im.insertAdjacentHTML("beforeend", '<img class="cross" onclick="check2()" src="cross.png"></img>');

function check1() {
    alert("You are correct")

}
function check2() {
    alert("wrong")
}