/* ------------------------ links ------------------------ */
// конструктор ссылки)
let currentUrl = new URL(window.location.href)
//var currentUrlBase = currentUrl.origin
var currentUrlBase = new URL("/PlazaShop/prod/public", currentUrl.origin) // ONLY BY HANDS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// лого
document.querySelectorAll(".logo").forEach(
    (logo) => {
        logo.onclick = function () {window.location.href = currentUrlBase + "/index.html"}
    }
)

// каталог
document.querySelectorAll(".catalog-link").forEach(
    (link) => {
        let searchType = link.getAttribute("data-what-to-search")

        if (searchType == "allItems") {
            link.onclick = () => {window.location.href = currentUrlBase + "/searchPage.html"}
        } else {
            link.onclick = () => {window.location.href = currentUrlBase + "/searchPage.html" + `?searchByCatalog=${searchType}`}
        }
    }
)

// поиск товаров
document.querySelector(".search-btn").onclick = () => goSearch()
document.querySelector(".search").onkeyup = (event) => {
    if (event.code == "Enter") {
        goSearch()
    }
}
function goSearch () {
    let value = document.querySelector(".search").value
    if (value.length == 0) {
        alert("Search value is empty")
    } else {
        window.location.href = currentUrlBase + "/searchPage.html" + `?search=${value}`
    }
}


// сами товары (перенаправление в itemPage)
document.querySelectorAll(".mini-item-block, .item-block, .cart__item-block").forEach(
    (el) => {
        el.onclick = function () {
            let itemId = event.currentTarget.getAttribute("data-item-id")

            if (event.target.classList.contains("goToItem")) {
                window.location.href = currentUrlBase + "/itemPage.html" + `?itemId=${itemId}`
            }
        }
    }
)



// корзина
document.querySelectorAll(".goToCart").forEach(
    (cart) => {
        cart.onclick = function () {window.location.href = currentUrlBase + "/cart.html"}
    }
)

// compare
document.querySelectorAll(".goToCompare").forEach(
    (compare) => {
        compare.onclick = function () {window.location.href = currentUrlBase + "/compare.html"}
    }
)