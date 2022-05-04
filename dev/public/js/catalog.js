
const catalogBtn = document.querySelector(".catalog-btn");
const catalogInner = document.querySelector(".catalog-inner");
const LinksBox = document.querySelector(".catalog-inner__links-box");
let catalog_animationState = false;

const catalogItems = catalogInner.querySelectorAll("*");

function catalogHide() {
    // скрываем линки
    catalogItems.forEach(elem => {
        elem.style.opacity = "0"
    });

    // анимация
    LinksBox.style.height = "0";
    setTimeout(
        function () {
            catalogInner.style.width = "calc(min(3vw, 37px) * 2.0)";
        }
        ,200
    )
    setTimeout(
        function () {
            catalogInner.classList.add("hidden");
        }
        ,1300
    )
}

function catalogShow() {
   catalogInner.classList.remove("hidden");

    setTimeout(
        function () {
            catalogInner.style.width = "max(calc(45vh - 15vw), 40vh)";
        }
        ,150
    );

    setTimeout(
        function () {
            LinksBox.style.height = "auto";
        }
        ,1200
    );


    setTimeout(
        function () {
            catalogItems.forEach(elem => {
                elem.style.opacity = "1"
            });
        }
    ,1200
    )
}



catalogBtn.onclick = function () {


    // чтобы функцию не вызывали когда она уже идет
    if (!catalog_animationState) {

        catalog_animationState = true;


        if (catalogBtn.classList.contains("catalogBtn_active")) {
            catalogHide()
            catalogBtn.classList.remove("catalogBtn_active")
            catalogBtn.style.transform = 'rotate(0deg)';
        } else {
            catalogShow()
            catalogBtn.classList.add("catalogBtn_active")
            catalogBtn.style.transform = 'rotate(180deg)';
        }

        setTimeout(function () {
                catalog_animationState = false;
            }
            , 1400)
    }
}





function showHideCataloged(linkID) {
    const place = document.querySelector(`.catalog-inner__links-box .${linkID}`);
    let linkWrapper = place.querySelector(".catalog-linkBtn-inner");
    let linkWrapperIndicator = place.querySelector(".__after");

    if (linkWrapper.classList.contains("__active")) {

        linkWrapper.classList.remove("__active");
        linkWrapper.classList.add("hidden");

        linkWrapperIndicator.style.transform = "rotate(0deg)"
    } else {
        linkWrapper.classList.add("__active");
        linkWrapper.classList.remove("hidden");

        linkWrapperIndicator.style.transform = "rotate(180deg)"
    }
}
