const Slider1=document.getElementById("slider-inner-1"),Slider2=document.getElementById("slider-inner-2"),Slider3=document.getElementById("slider-inner-3");let Slider1_offset=0,Slider2_offset=0,Slider3_offset=0;function recolorDotsS1(a){0===a?(document.querySelector("#dot-1_1").style.backgroundColor=mainColor,document.querySelector("#dot-1_2").style.backgroundColor="black",document.querySelector("#dot-1_3").style.backgroundColor="black",document.querySelector("#dot-1_4").style.backgroundColor="black"):-25===a?(document.querySelector("#dot-1_1").style.backgroundColor="black",document.querySelector("#dot-1_2").style.backgroundColor=mainColor,document.querySelector("#dot-1_3").style.backgroundColor="black",document.querySelector("#dot-1_4").style.backgroundColor="black"):-50===a?(document.querySelector("#dot-1_1").style.backgroundColor="black",document.querySelector("#dot-1_2").style.backgroundColor="black",document.querySelector("#dot-1_3").style.backgroundColor=mainColor,document.querySelector("#dot-1_4").style.backgroundColor="black"):-75===a?(document.querySelector("#dot-1_1").style.backgroundColor="black",document.querySelector("#dot-1_2").style.backgroundColor="black",document.querySelector("#dot-1_3").style.backgroundColor="black",document.querySelector("#dot-1_4").style.backgroundColor=mainColor):void 0}function recolorDotsS2(a){0===a?(document.querySelector("#dot-2_1").style.backgroundColor=mainColor,document.querySelector("#dot-2_2").style.backgroundColor="black",document.querySelector("#dot-2_3").style.backgroundColor="black",document.querySelector("#dot-2_4").style.backgroundColor="black"):-33.33===a?(document.querySelector("#dot-2_1").style.backgroundColor="black",document.querySelector("#dot-2_2").style.backgroundColor=mainColor,document.querySelector("#dot-2_3").style.backgroundColor="black",document.querySelector("#dot-2_4").style.backgroundColor="black"):-66.66===a?(document.querySelector("#dot-2_1").style.backgroundColor="black",document.querySelector("#dot-2_2").style.backgroundColor="black",document.querySelector("#dot-2_3").style.backgroundColor=mainColor,document.querySelector("#dot-2_4").style.backgroundColor="black"):-99.99===a?(document.querySelector("#dot-2_1").style.backgroundColor="black",document.querySelector("#dot-2_2").style.backgroundColor="black",document.querySelector("#dot-2_3").style.backgroundColor="black",document.querySelector("#dot-2_4").style.backgroundColor=mainColor):void 0}function recolorDotsS3(a){0===a?(document.querySelector("#dot-3_1").style.backgroundColor=mainColor,document.querySelector("#dot-3_2").style.backgroundColor="black",document.querySelector("#dot-3_3").style.backgroundColor="black",document.querySelector("#dot-3_4").style.backgroundColor="black"):-33.33===a?(document.querySelector("#dot-3_1").style.backgroundColor="black",document.querySelector("#dot-3_2").style.backgroundColor=mainColor,document.querySelector("#dot-3_3").style.backgroundColor="black",document.querySelector("#dot-3_4").style.backgroundColor="black"):-66.66===a?(document.querySelector("#dot-3_1").style.backgroundColor="black",document.querySelector("#dot-3_2").style.backgroundColor="black",document.querySelector("#dot-3_3").style.backgroundColor=mainColor,document.querySelector("#dot-3_4").style.backgroundColor="black"):-99.99===a?(document.querySelector("#dot-3_1").style.backgroundColor="black",document.querySelector("#dot-3_2").style.backgroundColor="black",document.querySelector("#dot-3_3").style.backgroundColor="black",document.querySelector("#dot-3_4").style.backgroundColor=mainColor):void 0}function Slider1Dots(a){Slider1_offset=a,Slider1.style.left=Slider1_offset+"%",recolorDotsS1(Slider1_offset)}function Slider2Dots(a){Slider2_offset=a,Slider2.style.left=Slider2_offset+"%",recolorDotsS2(Slider2_offset)}function Slider3Dots(a){Slider3_offset=a,Slider3.style.left=Slider3_offset+"%",recolorDotsS3(Slider3_offset)}document.querySelector("#_btn-1_1").addEventListener("click",function(){Slider1_offset+=25,0<Slider1_offset&&(Slider1_offset=-75),Slider1.style.left=Slider1_offset+"%",recolorDotsS1(Slider1_offset)}),document.querySelector("#_btn-1_2").addEventListener("click",function(){Slider1_offset-=25,-75>Slider1_offset&&(Slider1_offset=0),Slider1.style.left=Slider1_offset+"%",recolorDotsS1(Slider1_offset)}),document.querySelector("#_btn-2_1").addEventListener("click",function(){Slider2_offset+=33.33,0<Slider2_offset&&(Slider2_offset=-99.99),Slider2.style.left=Slider2_offset+"%",recolorDotsS2(Slider2_offset)}),document.querySelector("#_btn-2_2").addEventListener("click",function(){Slider2_offset-=33.33,-99.99>Slider2_offset&&(Slider2_offset=0),Slider2.style.left=Slider2_offset+"%",recolorDotsS2(Slider2_offset)}),document.querySelector("#_btn-3_1").addEventListener("click",function(){Slider3_offset+=33.33,0<Slider3_offset&&(Slider3_offset=-99.99),Slider3.style.left=Slider3_offset+"%",recolorDotsS3(Slider3_offset)}),document.querySelector("#_btn-3_2").addEventListener("click",function(){Slider3_offset-=33.33,-99.99>Slider3_offset&&(Slider3_offset=0),Slider3.style.left=Slider3_offset+"%",recolorDotsS3(Slider3_offset)});