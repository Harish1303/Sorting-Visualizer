
var nums = [];
var divs = [];
var inp_gen = document.getElementById("genarr");
var inp_as = document.getElementById("arraysize");
var array_size = inp_as.value;
var algo_buttons = document.querySelectorAll(".algobuttons button");
var cont = document.getElementById("cont1");
function newarray() {


    cont.innerHTML = "";
    for (var i = 0; i < array_size; i++) {
        var a = Math.floor((Math.random() * 100) + 1);
        nums[i] = a;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i])
        divs[i].style = " margin: 0% 0.1%;background-color:#55bdca; width:10%; height:" + nums[i] + "%;";

    }


}
function disablebuttons() {


    for (var i = 0; i < algo_buttons.length; i++) {

        algo_buttons[i].disabled = true;

        inp_as.disabled = true;
        sortspeed.disabled = true;

    }
}

function enablebuttons() {
    var w = setTimeout(function () {
        for (var i = 0; i < algo_buttons.length; i++) {

            algo_buttons[i].disabled = false;

            inp_as.disabled = false;
            sortspeed.disabled = false;

        }
    }, timer += delaytime);
}
function updatearray() {
    array_size = inp_as.value;

    newarray();

}
window.onload = newarray();
inp_as.addEventListener("input", updatearray);
if (inp_gen) {
    inp_gen.addEventListener("click", newarray);
}


