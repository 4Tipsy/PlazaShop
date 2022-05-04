
const Slider1 = document.getElementById('slider-inner-1');
const Slider2 = document.getElementById('slider-inner-2');
const Slider3 = document.getElementById('slider-inner-3');
let Slider1_offset = 0;
let Slider2_offset = 0;
let Slider3_offset = 0;



function recolorDotsS1(x){
    switch (x) {
        case 0:
            document.querySelector("#dot-1_1").style.backgroundColor = mainColor;
            document.querySelector("#dot-1_2").style.backgroundColor = "black";
            document.querySelector("#dot-1_3").style.backgroundColor = "black";
            document.querySelector("#dot-1_4").style.backgroundColor = "black";
            break;
        case -25:
            document.querySelector("#dot-1_1").style.backgroundColor = "black";
            document.querySelector("#dot-1_2").style.backgroundColor = mainColor;
            document.querySelector("#dot-1_3").style.backgroundColor = "black";
            document.querySelector("#dot-1_4").style.backgroundColor = "black";
            break;
        case -50:
            document.querySelector("#dot-1_1").style.backgroundColor = "black";
            document.querySelector("#dot-1_2").style.backgroundColor = "black";
            document.querySelector("#dot-1_3").style.backgroundColor = mainColor;
            document.querySelector("#dot-1_4").style.backgroundColor = "black";
            break;
        case -75:
            document.querySelector("#dot-1_1").style.backgroundColor = "black";
            document.querySelector("#dot-1_2").style.backgroundColor = "black";
            document.querySelector("#dot-1_3").style.backgroundColor = "black";
            document.querySelector("#dot-1_4").style.backgroundColor = mainColor;
            break;
    }
};
function recolorDotsS2(x){
    switch (x) {
        case 0:
            document.querySelector("#dot-2_1").style.backgroundColor = mainColor;
            document.querySelector("#dot-2_2").style.backgroundColor = "black";
            document.querySelector("#dot-2_3").style.backgroundColor = "black";
            document.querySelector("#dot-2_4").style.backgroundColor = "black";
            break;
        case -33.33:
            document.querySelector("#dot-2_1").style.backgroundColor = "black";
            document.querySelector("#dot-2_2").style.backgroundColor = mainColor;
            document.querySelector("#dot-2_3").style.backgroundColor = "black";
            document.querySelector("#dot-2_4").style.backgroundColor = "black";
            break;
        case -66.66:
            document.querySelector("#dot-2_1").style.backgroundColor = "black";
            document.querySelector("#dot-2_2").style.backgroundColor = "black";
            document.querySelector("#dot-2_3").style.backgroundColor = mainColor;
            document.querySelector("#dot-2_4").style.backgroundColor = "black";
            break;
        case -99.99:
            document.querySelector("#dot-2_1").style.backgroundColor = "black";
            document.querySelector("#dot-2_2").style.backgroundColor = "black";
            document.querySelector("#dot-2_3").style.backgroundColor = "black";
            document.querySelector("#dot-2_4").style.backgroundColor = mainColor;
            break;
    }
};
function recolorDotsS3(x){
    switch (x) {
        case 0:
            document.querySelector("#dot-3_1").style.backgroundColor = mainColor;
            document.querySelector("#dot-3_2").style.backgroundColor = "black";
            document.querySelector("#dot-3_3").style.backgroundColor = "black";
            document.querySelector("#dot-3_4").style.backgroundColor = "black";
            break;
        case -33.33:
            document.querySelector("#dot-3_1").style.backgroundColor = "black";
            document.querySelector("#dot-3_2").style.backgroundColor = mainColor;
            document.querySelector("#dot-3_3").style.backgroundColor = "black";
            document.querySelector("#dot-3_4").style.backgroundColor = "black";
            break;
        case -66.66:
            document.querySelector("#dot-3_1").style.backgroundColor = "black";
            document.querySelector("#dot-3_2").style.backgroundColor = "black";
            document.querySelector("#dot-3_3").style.backgroundColor = mainColor;
            document.querySelector("#dot-3_4").style.backgroundColor = "black";
            break;
        case -99.99:
            document.querySelector("#dot-3_1").style.backgroundColor = "black";
            document.querySelector("#dot-3_2").style.backgroundColor = "black";
            document.querySelector("#dot-3_3").style.backgroundColor = "black";
            document.querySelector("#dot-3_4").style.backgroundColor = mainColor;
            break;
    }
};


function Slider1Dots(x) {
    Slider1_offset = x;
    Slider1.style.left = Slider1_offset + "%"

    recolorDotsS1(Slider1_offset)
}
function Slider2Dots(x) {
    Slider2_offset = x;
    Slider2.style.left = Slider2_offset + "%"

    recolorDotsS2(Slider2_offset)
}
function Slider3Dots(x) {
    Slider3_offset = x;
    Slider3.style.left = Slider3_offset + "%"

    recolorDotsS3(Slider3_offset)
}


document.querySelector("#_btn-1_1").addEventListener("click", function (){
    Slider1_offset += 25;
    if (Slider1_offset > 0) {
        Slider1_offset = -75
    }

    Slider1.style.left = Slider1_offset + "%"

    recolorDotsS1(Slider1_offset)
});
document.querySelector("#_btn-1_2").addEventListener("click", function (){
    Slider1_offset -= 25;
    if (Slider1_offset < -75) {
        Slider1_offset = 0
    }

    Slider1.style.left = Slider1_offset + "%"

    recolorDotsS1(Slider1_offset)
});

document.querySelector("#_btn-2_1").addEventListener("click", function (){
    Slider2_offset += 33.33;
    if (Slider2_offset > 0) {
        Slider2_offset = -99.99
    }

    Slider2.style.left = Slider2_offset + "%"

    recolorDotsS2(Slider2_offset)
});
document.querySelector("#_btn-2_2").addEventListener("click", function (){
    Slider2_offset -= 33.33;
    if (Slider2_offset < -99.99) {
        Slider2_offset = 0
    }

    Slider2.style.left = Slider2_offset + "%"

    recolorDotsS2(Slider2_offset)
});
document.querySelector("#_btn-3_1").addEventListener("click", function (){
    Slider3_offset += 33.33;
    if (Slider3_offset > 0) {
        Slider3_offset = -99.99
    }

    Slider3.style.left = Slider3_offset + "%"

    recolorDotsS3(Slider3_offset)
});
document.querySelector("#_btn-3_2").addEventListener("click", function (){
    Slider3_offset -= 33.33;
    if (Slider3_offset < -99.99) {
        Slider3_offset = 0
    }

    Slider3.style.left = Slider3_offset + "%"

    recolorDotsS3(Slider3_offset)
});
