document.querySelectorAll(".tips4search > span").forEach( (el) => {
    el.onclick = () => {
        value = el.innerText
        window.location.href = currentUrlBase + "/searchPage.html" + `?search=${value}`
    }
})


function showHideSortBtn() {

    let sortBtn__after = document.querySelector(".sort-items-container .__after")
    let inner = document.querySelector(".sort-items__btn__inner");

    if (inner.classList.contains("__active")) {

        inner.classList.remove("__active");
        inner.classList.add("hidden");

        sortBtn__after.style.transform = "rotate(0deg)"
    } else {
        inner.classList.add("__active");
        inner.classList.remove("hidden");

        sortBtn__after.style.transform = "rotate(180deg)"
    }
}

function showHideChoosePropsBlock(thisBlock) {

    let inner = thisBlock.querySelector(".__block-options");
    let __after = thisBlock.querySelector(".block-name__after");

    if (event.target.classList.contains("__showHide_target")) {
        if (inner.classList.contains("__active")) {

            inner.classList.remove("__active");
            inner.classList.add("hidden");

            __after.style.transform = "rotate(0deg)"
        } else {
            inner.classList.add("__active");
            inner.classList.remove("hidden");

            __after.style.transform = "rotate(180deg)"
        }
    }
}
function markSortBtn(thisBtn) {

    document.querySelectorAll(".__sortOption").forEach(
        (el) => {el.style = ""}
    )
    thisBtn.style.textDecoration = "underline"

    let sortBtn = document.querySelector(".sort-items__btn")
    sortBtn.querySelector("span").innerText = thisBtn.innerText

}

function changeSortMode(mode) {
    // вызывается, при изменении типа сортировки
    let urlParams = new URLSearchParams(window.location.search)
    urlParams.set('sortMode', mode)
    urlParams.set('page', 1)
    window.location.search = urlParams
}