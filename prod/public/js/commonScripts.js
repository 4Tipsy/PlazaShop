const mainColor="#DF16BF";let IDs_in_cart,IDs_in_compare;null==localStorage.getItem("PlazaShop__IDs_in_cart")?(localStorage.setItem("PlazaShop__IDs_in_cart",JSON.stringify([])),IDs_in_cart=JSON.parse(localStorage.getItem("PlazaShop__IDs_in_cart"))):IDs_in_cart=JSON.parse(localStorage.getItem("PlazaShop__IDs_in_cart")),null==localStorage.getItem("PlazaShop__IDs_in_compare")?(localStorage.setItem("PlazaShop__IDs_in_compare",JSON.stringify([])),IDs_in_compare=JSON.parse(localStorage.getItem("PlazaShop__IDs_in_compare"))):IDs_in_compare=JSON.parse(localStorage.getItem("PlazaShop__IDs_in_compare"));function refresh_cart_and_compare_indicators(){let a=document.querySelector(".goToCart_indicator"),b=document.querySelector(".goToCompare_indicator");a.innerText=0<IDs_in_cart.length?99<IDs_in_cart.length?"n":IDs_in_cart.length:"0",b.innerText=0<IDs_in_compare.length?99<IDs_in_compare.length?"N":IDs_in_compare.length:"0"}refresh_cart_and_compare_indicators(),addEventListener("storage",function(a){("PlazaShop__IDs_in_cart"==a.key||"PlazaShop__IDs_in_compare"==a.key)&&location.reload()});let afterPrice_="\u0440\u0443\u0431";function prettifyPrice(a){let b=a.toString();return b.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")+" "+afterPrice_}window.onload=setTimeout(function(){document.querySelector(".shading").classList.add("hidden")},450),document.querySelector(".go-to-top").onclick=function(){window.scrollTo({top:0,behavior:"smooth"})},document.querySelector(".chat-btn").onclick=function(){alert("Chat is not working, it's just a mere placeholder")},console.log("Everything here is clickable, just try it!");async function zxc(){for(let a=1e3;0<a;)console.log(`${a}-7=${a-7}`),a-=7,await new Promise(a=>setTimeout(a,120));console.log("???")}