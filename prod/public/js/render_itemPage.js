const itemImgArea=document.querySelector("#item-img-area"),itemBuyAreaWrapper=document.querySelector("#item-buy-area-wrapper"),itemChars=document.querySelector("#item-info-area__item-chars-area"),description_=document.querySelector("#item__description");function getItem_fromGetParams(a){let b,c=new URLSearchParams(window.location.search);return b=c.has("itemId")?c.get("itemId"):-1,a.find(a=>a.itemId==b)}function ItemImgAreaInner(a){function b(a){let b=document.querySelector(".__chosen-img");b.style.backgroundImage="url("+a+")"}function c(a,c){return React.createElement("div",{className:"__img-choose-from__option",key:c,onClick:()=>{b(a)}},React.createElement("div",{className:"__img-itself",style:{backgroundImage:"url("+a+")"}}))}return React.createElement(React.Fragment,null,React.createElement("div",{className:"__chosen-img-wrapper"},1==a.onDiscount&&React.createElement("div",{className:"__discount"},React.createElement("div",{className:"__discount__percent NSR_"},a.itemDiscount)),React.createElement("div",{className:"__chosen-img",style:{backgroundImage:"url("+a.itemImg+")"}})),React.createElement("div",{className:"__img-choose-from"},a.itemImgCollection.map((a,b)=>c(a,b))))}let itemToRender=getItem_fromGetParams(JSONdata);ReactDOM.render(ItemImgAreaInner(itemToRender),itemImgArea);function ItemBuyAreaInner(a){return React.createElement("div",{className:"item-buy-area"},React.createElement("div",{className:"__item-name-wrapper NSR_"},React.createElement("div",{className:"__item-name"},a.itemName)),React.createElement("div",{className:"item-buy-area__line"}),React.createElement("div",{className:"__item-options"},React.createElement("div",{className:"__item-options__choose-option"},"not now ;)")),React.createElement("div",{className:"item-buy-area__line"}),React.createElement("div",{className:"__buy-btns_and_prise"},React.createElement("div",{className:"__price-area"},React.createElement("div",{className:"NSR_",style:{fontSize:"min(2.6vw, 29px)"}},"Price: "),React.createElement("div",{className:"__price-wrapper"},1==a.onDiscount&&React.createElement("div",{className:"__price-old"},prettifyPrice(a.itemPriceOld)),React.createElement("div",{className:"__price"},prettifyPrice(a.itemPrice)))),React.createElement("div",{className:"__btns"},React.createElement("button",{className:"__add-to-cart NSR_"},"Add to cart"),React.createElement("button",{className:"__add-to-compare"}))))}ReactDOM.render(ItemBuyAreaInner(itemToRender),itemBuyAreaWrapper);function ItemChar(a,b){return React.createElement("div",{className:"__item-char",key:b},React.createElement("div",null,a[0]),React.createElement("span",{className:"__char-line"}),React.createElement("div",null,a[1]))}let charsToRender=Object.entries(itemToRender.itemChars);ReactDOM.render(charsToRender.map((a,b)=>ItemChar(a,b)),itemChars);function ItemDesc(a){return React.createElement("span",null,a.itemInfo)}ReactDOM.render(ItemDesc(itemToRender),description_);