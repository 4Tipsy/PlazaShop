/* этот пздц тоже надо переделать */
const Slider1 = document.getElementById('slider-inner-1');
const Slider2 = document.getElementById('slider-inner-2');
const Slider3 = document.getElementById('slider-inner-3');
let Slider1_offset = 0;
let Slider2_offset = 0;
let Slider3_offset = 0;




function recolorDotsS1(x) {
  let dots = document.querySelector(".slider-1-dots").querySelectorAll(".dot")

  dots.forEach(
    (el)=>{
        el.style.backgroundColor = "black"
    }
  )
  dots[ x/-25 ].style.backgroundColor = mainColor
}
function recolorDotsS2(x) {
  let dots = document.querySelector(".slider-2-dots").querySelectorAll(".dot")

  dots.forEach(
    (el)=>{
        el.style.backgroundColor = "black"
    }
  )
  dots[ x/-33.33 ].style.backgroundColor = mainColor
}
function recolorDotsS3(x) {
  let dots = document.querySelector(".slider-3-dots").querySelectorAll(".dot")

  dots.forEach(
    (el)=>{
        el.style.backgroundColor = "black"
    }
  )
  dots[ x/-33.33 ].style.backgroundColor = mainColor
}




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
