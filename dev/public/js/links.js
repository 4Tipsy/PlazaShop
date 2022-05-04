/* ------------------------ links ------------------------ */
// конструктор ссылки)
let currentUrl = new URL(window.location.href)
//var currentUrlBase = currentUrl.origin
var currentUrlBase = new URL("/prod/public", currentUrl.origin) // ONLY 4 DEV!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
        link.onclick = () => {window.location.href = currentUrlBase + "/searchPage.html" + `?searchByCatalog=${searchType}`}
    }
)

// для поиска онклики прописаны в search.js

// сами товары (перенаправление в itemPage)
document.querySelectorAll(".mini-item-block, .item-block").forEach(
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