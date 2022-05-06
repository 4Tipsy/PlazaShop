const itemImgArea = document.querySelector("#item-img-area")
const itemBuyAreaWrapper = document.querySelector("#item-buy-area-wrapper")
const itemChars = document.querySelector("#item-info-area__item-chars-area")
const description_ = document.querySelector("#item__description")

function getItem_fromGetParams(array) {
    let searchParams = new URLSearchParams(window.location.search)
    let itemId
    if (searchParams.has("itemId")) {
        itemId = searchParams.get("itemId")
    } else {
        itemId = -1
    }

    return array.find(item => item["itemId"] == itemId)
}

function ItemImgAreaInner(props) {

    function changeChosenImg(e, imgUrl) {
        let chosenImg = document.querySelector(".__chosen-img")
        chosenImg.style.backgroundImage = "url(" + imgUrl + ")"

        document.querySelectorAll(".__img-choose-from__option").forEach(
            (el) => {el.style = ""}
        )


        e.currentTarget.style.border = `solid 1px ${mainColor}`
    }

    
    function Option_imgToChoose(props, index) {
        return(
            <div className="__img-choose-from__option" key={index} onClick={(e)=>{changeChosenImg(e, props)}}>
                <div className="__img-itself" style={{backgroundImage: "url("+props+")"}}/>
            </div>
        )
    }
    return(
        <>
            <div className="__chosen-img-wrapper">
                {(props.onDiscount == 1) &&
                    <div className="__discount">
                        <div className="__discount__percent NSR_">{props.itemDiscount}</div>
                    </div>
                }
                <div className="__chosen-img"
                     style={{backgroundImage: "url("+props.itemImg+")"}}/>
            </div>
            <div className="__img-choose-from">
                {props.itemImgCollection.map( (img, index)=>{return Option_imgToChoose(img, index)} )}
            </div>
        </>
    )
}


let itemToRender = getItem_fromGetParams(JSONdata)
ReactDOM.render(
    ItemImgAreaInner(itemToRender),
    itemImgArea
)
document.querySelector(".__img-choose-from__option").style.border = `solid 1px ${mainColor}` // костыль





function ItemBuyAreaInner(props) {
    function addTo_cart_or_compare(event, itemId) {
        // изменяем массив с корзиной
        if (event.target.classList.contains("__add-to-cart")) {
            IDs_in_cart.push(itemId)
            localStorage.setItem("PlazaShop__IDs_in_cart", JSON.stringify(IDs_in_cart))
        }
        else if (event.target.classList.contains("__add-to-compare")) {
            IDs_in_compare.push(itemId)
            localStorage.setItem("PlazaShop__IDs_in_compare", JSON.stringify(IDs_in_compare))
        }

        refresh_cart_and_compare_indicators()
    }
    return (
            



        <div className="item-buy-area">
            <div className="__item-name-wrapper NSR_">
                <div className="__item-name">{props.itemName}</div>
            </div>
            <div className="item-buy-area__line"/>

            <div className="__item-options">
                <div className="__item-options__choose-option">
                    
                    
                    
                    <p style={{"marginTop": "10vw"}}>not now ;)</p>



                </div>


            </div>
            <div className="item-buy-area__line"/>
            <div className="__buy-btns_and_prise">
                <div className="__price-area">
                    <div className="NSR_" style={{"fontSize": "min(2.6vw, 29px)"}}>Price: </div>
                    <div className="__price-wrapper">
                        {(props.onDiscount == 1) &&
                            <div className="__price-old">{prettifyPrice(props.itemPriceOld)}</div>
                        }
                        <div className="__price">{prettifyPrice(props.itemPrice)}</div>
                    </div>
                </div>
                <div className="__btns" onClick={(event)=>{addTo_cart_or_compare(event, props.itemId)}}>
                    <button className="__add-to-cart NSR_">Add to cart</button>
                    <button className="__add-to-compare"></button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    ItemBuyAreaInner(itemToRender),
    itemBuyAreaWrapper
)



function ItemChar (props, key) {

    return (
        <div className="__item-char" key={key}>
            <div>{props[0]}</div>
            <span className="__char-line"></span>
            <div>{props[1]}</div>
        </div>
    )
}



let charsToRender = Object.entries(itemToRender["itemChars"])
ReactDOM.render(
    charsToRender.map((el, index) => {return ItemChar(el, index)}),
    itemChars
)


function ItemDesc (props) {
    return (
        <span>{props.itemInfo}</span>
    )
}

ReactDOM.render(
    ItemDesc(itemToRender),
    description_
)