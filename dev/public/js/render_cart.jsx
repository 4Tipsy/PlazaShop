const itemsList = document.querySelector("#cart__items-list")
const howManyInCart = document.querySelectorAll(".__how-many-in-cart")
const totalPrise = document.querySelector(".__total-price span")


function CartItem(props, key) {
    function clone_or_remove_item(e) {
        let itemId = e.currentTarget.getAttribute("data-item-id")

        // изменяем массив с корзиной
        if (e.target.classList.contains("__item-clone")) {
            IDs_in_cart.push(itemId)
        }
        else if (e.target.classList.contains("__item-remove")) {
            let i = IDs_in_cart.indexOf(itemId);
            IDs_in_cart.splice(i,1);
        }
        
        // передаем изменившийся массив в localStorage
        localStorage.setItem("PlazaShop__IDs_in_cart", JSON.stringify(IDs_in_cart))

        // ререндерим корзину
        render_cart(JSONdata)
    }
    return (
        <div className="cart__item-block" data-item-id={props.itemId} key={key} onClick={clone_or_remove_item}>
            <div className="__img-wrapper">
                {(props.onDiscount == 1) &&
                    <div className="__discount__indicator">%!</div>
                }
                <div className="__img-wrapper__img-itself"
                     style={{backgroundImage: "url("+props.itemImg+")"}}>
                </div>
            </div>
            <div className="__text NSR_">
                {props.itemName + " -- " + props.itemInfo}
            </div>
            <div className="__btns">
                <button className="__item-clone"/>
                <button className="__item-remove"/>
            </div>
            <div className="__info_and_prise">
                <div className="__info-box">
                    <div className="__howManyAvailable">Available: {props.available}</div>
                </div>
                <div className="__prise-box">
                    <div className="__prise">
                        {prettifyPrice(props.itemPrice)}
                    </div>
                    <div className="__prise_old">
                        {(props.onDiscount == 1) &&
                            prettifyPrice(props.itemPriceOld)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



function render_cart(array) {
    function cart_getItems(IDs, array) {
        // получаем товары, id который указаны в IDs_in_cart
        let newArray = []

        IDs.forEach(
            (one_id) => {
                array.forEach(
                    (el) => {
                        let itemId = el["itemId"]
                        if (itemId == one_id) {
                            newArray.push(el)
                        }
                    }
                )
            }
        )

        return newArray
    }
    function calculateTotalPrice(array) {
        let totalPrice = 0

        array.forEach(
            (item) => {
                totalPrice += item["itemPrice"]
            }
        )
        return totalPrice
    }
    function goRender(itemsInCart) {
        ReactDOM.render(
            itemsInCart.map((el, index) => {return (CartItem(el, index))}),
            itemsList
        )
    }

    // получаем массив товаров и рендерим его
    IDs_in_cart = JSON.parse(localStorage.getItem("PlazaShop__IDs_in_cart"))
    let itemsInCart = cart_getItems(IDs_in_cart, array)
    goRender(itemsInCart)

    // изменяем показатели кол-ва товаров(deco) и totalPrice
    howManyInCart.forEach(
        (el) => {el.innerText = IDs_in_cart.length}
    )
    document.title = "Cart " + `(${IDs_in_cart.length})`

    totalPrise.innerText = prettifyPrice( calculateTotalPrice(itemsInCart) )
    refresh_cart_and_compare_indicators()
}
render_cart(JSONdata)