const mainColor = "#DF16BF"; //don't forget to change this in css!!!

// корзина и compare

let IDs_in_cart, IDs_in_compare

if (localStorage.getItem("PlazaShop__IDs_in_cart") == null) {
    // если этого параметра в localStorage нет, то мы его создадим
    localStorage.setItem("PlazaShop__IDs_in_cart", JSON.stringify([]))

    IDs_in_cart = JSON.parse(localStorage.getItem("PlazaShop__IDs_in_cart"))
} else {
    IDs_in_cart = JSON.parse(localStorage.getItem("PlazaShop__IDs_in_cart"))
}

if (localStorage.getItem("PlazaShop__IDs_in_compare") == null) {
    // если этого параметра в localStorage нет, то мы его создадим
    localStorage.setItem("PlazaShop__IDs_in_compare", JSON.stringify([]))

    IDs_in_compare = JSON.parse(localStorage.getItem("PlazaShop__IDs_in_compare"))
} else {
    IDs_in_compare = JSON.parse(localStorage.getItem("PlazaShop__IDs_in_compare"))
}



function refresh_cart_and_compare_indicators() {
    let cart = document.querySelector(".goToCart_indicator")
    let compare = document.querySelector(".goToCompare_indicator")

    if (IDs_in_cart.length > 0) {
        if (IDs_in_cart.length > 99) {
            cart.innerText = "n"
        } else {
            cart.innerText = IDs_in_cart.length
        }
    } else {
        cart.innerText = "0"
    }

    if (IDs_in_compare.length > 0) {
        if (IDs_in_compare.length > 99) {
            compare.innerText = "N"
        } else {
            compare.innerText = IDs_in_compare.length
        }
    } else {
        compare.innerText = "0"
    }
}
refresh_cart_and_compare_indicators() // при загрузки странички

addEventListener("storage", function (event) {
    if (event.key == "PlazaShop__IDs_in_cart" || event.key == "PlazaShop__IDs_in_compare") {
        location.reload()
    }
})



// разбивает число(xxxxxxxxx) на "xxx xxx xxx"
let afterPrice_ = "руб" // в какой валюте цены
function prettifyPrice(num) {


    let str = num.toString()
    return str.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ') + " " + afterPrice_
}


// чтобы юзер не сломал поиск и т д
window.onload = setTimeout(
    function() {
        document.querySelector(".shading").classList.add("hidden")
    }
    ,450);


document.querySelector(".go-to-top").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelector(".chat-btn").onclick = function () {
    alert("Chat is not working, it's just a mere placeholder")
}



// ;)
async function zxc () { 
    let i = 1000
    while (i > 0) {
        console.log(`${i}-7=${i-7}`)
        i -= 7

        await new Promise(j => setTimeout(j, 120));
    }
    console.log("???")
}