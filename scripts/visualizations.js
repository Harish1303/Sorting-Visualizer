var timer = 0;
var speeds = 1000;
var sortspeed = document.getElementById("arrayspeed");
var delaytime = 10000 / (Math.floor(array_size / 10) * speeds);
sortspeed.addEventListener("input", vis_speed)
function vis_speed() {
    var arraysp = sortspeed.value;
    switch (parseInt(arraysp)) {
        case 1: speeds = 1;
            break
        case 2: speeds = 10;
            break;
        case 3: speeds = 100;
            break;
        case 4: speeds = 1000;
            break;
        case 5: speeds = 10000;
            break;
    }
    delaytime = 10000 / (Math.floor(array_size / 10) * speeds);
    console.log(arraysp)
}

function div_update(elem, ht, color) {
    var o = setTimeout(function () {
        elem.style = "margin: 0% 0.1%; background-color:" + color + "; width:10%; height:" + ht + "%;";
    }, timer += delaytime);
}
