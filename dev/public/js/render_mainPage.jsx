const slider1 = document.querySelector("#slider-inner-1");
const slider2 = document.querySelector("#slider-inner-2");
const slider3 = document.querySelector("#slider-inner-3");



// маленький блок
function MiniItemBlock(props) {
    function addTo_cart_or_compare(e) {

        let itemId = e.currentTarget.getAttribute("data-item-id")

        // изменяем массив с корзиной
        if (e.target.classList.contains("add-to-cart")) {
            IDs_in_cart.push(itemId)
            localStorage.setItem("PlazaShop__IDs_in_cart", JSON.stringify(IDs_in_cart))
        }
        else if (e.target.classList.contains("add-to-compare")) {
            IDs_in_compare.push(itemId)
            localStorage.setItem("PlazaShop__IDs_in_compare", JSON.stringify(IDs_in_compare))
        }

        refresh_cart_and_compare_indicators()
    }

    return (
        <div className="mini-item-block" data-item-id={props.itemId} key={props.itemId} onClick={addTo_cart_or_compare}>
            <button className="add-to-cart"/>
            <button className="add-to-compare"/>
            <div className="__image-wrapper goToItem">
                <div className="__image-wrapper__image-itself goToItem"
                     style={{backgroundImage: "url("+props.itemImg+")"}}>
                </div>
            </div>
            <div className="line-b"/>
            <div className="__name-wrapper NSR_ goToItem">
                {props.itemName}
            </div>
            <div className="__prise-wrapper">
                <div className="__prise">{prettifyPrice(props.itemPrice)}</div>
                {(props.onDiscount == 1) &&
                    <div className="__prise_old">{prettifyPrice(props.itemPriceOld)}</div>
                }
            </div>
            {(props.onDiscount == 1) &&
                <div className="__discount">
                    <div className="__discount__percent NSR_">{props.itemDiscount}</div>
                </div>
            }
        </div>
    )
}
// большой блок
function ItemBlock(props) {
    function addTo_cart_or_compare(e) {

        let itemId = e.currentTarget.getAttribute("data-item-id")

        // изменяем массив с корзиной
        if (e.target.classList.contains("add-to-cart")) {
            IDs_in_cart.push(itemId)
            localStorage.setItem("PlazaShop__IDs_in_cart", JSON.stringify(IDs_in_cart))
        }
        else if (e.target.classList.contains("add-to-compare")) {
            IDs_in_compare.push(itemId)
            localStorage.setItem("PlazaShop__IDs_in_compare", JSON.stringify(IDs_in_compare))
        }

        refresh_cart_and_compare_indicators()
    }

    return (
        <div className="item-block" data-item-id={props.itemId} key={props.itemId} onClick={addTo_cart_or_compare}>
            <button className="add-to-cart"/>
            <button className="add-to-compare"/>
            <div className="__image-wrapper goToItem">
                <div className="__image-wrapper__image-itself goToItem"
                     style={{backgroundImage: "url("+props.itemImg+")"}}>
                </div>
            </div>
            <div className="__name-wrapper NSR_ goToItem">
                {props.itemName}
            </div>
            <div className="line-b"/>
            <div className="__info-wrapper goToItem">
                {props.itemInfo}
            </div>
            <div className="__prise-wrapper">
                <div className="__prise">
                    {prettifyPrice(props.itemPrice)}
                </div>
                {(props.onDiscount == 1) &&
                    <div className="__prise_old">{prettifyPrice(props.itemPriceOld)}</div>
                }
            </div>
            {(props.onDiscount == 1) &&
                <div className="__discount">
                    <div className="__discount__percent NSR_">{props.itemDiscount}</div>
                </div>
            }
        </div>
    )
}




// придет массив с 25 товаров
// по 3 массива на каждый слайдер
let slider1_elems = JSONdata.slice(0, 7).map( (el) => {return (
    MiniItemBlock(el)
)})
let slider2_elems = JSONdata.slice(0, 6).map( (el) => {return (
    ItemBlock(el)
)})
let slider3_elems = JSONdata.slice(0, 12).map( (el) => {return (
    ItemBlock(el)
)})
// отрендерим их
ReactDOM.render(
    slider1_elems,
    slider1
)
ReactDOM.render(
    slider2_elems,
    slider2
)
ReactDOM.render(
    slider3_elems,
    slider3
)