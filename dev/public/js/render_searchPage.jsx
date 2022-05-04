const itemsList = document.querySelector("#items-list")
const pagination = document.querySelector("#pagination")
const chooseProps = document.querySelector("#choose-properties")
function ItemBlock_long(props) {
    function addTo_cart_or_compare(e) {

        let itemId = e.currentTarget.getAttribute("data-item-id")

        // изменяем массив с корзиной
        if (e.target.classList.contains("__add-to-cart")) {
            IDs_in_cart.push(itemId)
            localStorage.setItem("PlazaShop__IDs_in_cart", JSON.stringify(IDs_in_cart))
        }
        else if (e.target.classList.contains("__add-to-compare")) {
            IDs_in_compare.push(itemId)
            localStorage.setItem("PlazaShop__IDs_in_compare", JSON.stringify(IDs_in_compare))
        }

        refresh_cart_and_compare_indicators()
    }

    return (
        <div className="item-block" data-item-id={props.itemId} key={props.itemId} onClick={addTo_cart_or_compare}>
            <div className="__img-wrapper goToItem">
                {(props.onDiscount == 1) &&
                    <div className="__discount__indicator">%!</div>
                }
                <div className="__img-wrapper__img-itself goToItem"
                     style={{backgroundImage: "url("+props.itemImg+")"}}/>
            </div>
            <div className="__text NSR_ goToItem">
                {props.itemName + " -- " + props.itemInfo}
            </div>
            {(props.onDiscount == 1) &&
                <div className="__discount">
                    <div className="__discount__howManyPercents">{props.itemDiscount}</div>
                    <div className="__discount__discountName">%placeholder%</div>
                </div>
            }
            <div className="__btns_and_prise">
                <div className="__btns">
                    <button className="__add-to-compare"/>
                    <button className="__add-to-cart NSR_">Add to cart</button>
                </div>
                <div className="__prise-box">
                    <div className="__prise">
                        {prettifyPrice(props.itemPrice)}
                    </div>
                    {(props.onDiscount == 1) &&
                        <div className="__prise_old">
                            {prettifyPrice(props.itemPriceOld)}
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
function ChoosePropsVB(props) {

    function Option(props) {
        return (
            <div className="__option">
                <span className="ico-choose"/>
                <span className="__option__name">{props}</span>
            </div>
        )
    }
    return(
        <div className="choose-properties__values-block">
            <div className="__block-name __showHide_target">
                <div className="__block-name-itself NSR_ __showHide_target">{props[0]}</div>
                <div className="block-name__after __showHide_target"/>
            </div>
            <div className="__block-options">

                {props[1].map((el)=>{Option(el)})}


                <button className="show-more">Show more</button>
            </div>
        </div>
    )
}

let subArrayLength = 7 // то сколько товаров будет показано на 1 страничке
function render_searchPage() {
    function getItemsFromServer(array) {
        /* возвращает массив с товарами с сервера */

        // определяем, какие товары необходимо получить
        let items, items_
        let searchParams = new URLSearchParams(window.location.search)
        if (searchParams.has("searchByCatalog")) {
            let searchByTypeValue = searchParams.get("searchByCatalog")

            document.title = "Search for " + searchByTypeValue // заголовок окна

            items_ = JSONdata.filter( item => item["itemType"] == searchByTypeValue )
        } else {
            document.title = "Search among all items"

            items_ = JSONdata
        }

        // если был задействован поиск
        if (searchParams.has("search")) {
            let searchValue = searchParams.get("search")

            document.title = "Search for " + searchValue // заголовок окна

            items = items_.filter( item => (item["itemName"].search(searchValue) != -1) || (item["itemInfo"].search(searchValue) != -1) )
        } else {
            items = items_
        }

        return items
    }
    /*function render_chooseItemsProps() {
        function getItemsProps4render(array) {
            // возвращает объект со всеми возможными комбинациями характеристик(itemChars) товаров
            // возвращает:
            // {*общее имя характеристики*: [*все возможние ее значения*],
            //  *общее имя характеристики*: [*все возможние ее значения*],
            //  ...
            //  }
            let result = {}

            array.forEach(
                (item) => {
                    let chars = Object.entries(item["itemChars"])

                    chars.forEach(
                        (char) => {
                            // если такой характеристики нет в result, скопирует ее с этого item'а
                            if (!(char[0] in result)) {
                                result[char[0]] = []
                                result[char[0]].push(char[1])
                            } else {
                                let thisCharInResult = result[char[0]]
                                try {
                                    char[1].forEach(
                                        (el) => {
                                            if (thisCharInResult.indexOf(el) == -1) {
                                                result[char[0]].push(el)
                                            }
                                        }
                                    )
                                } catch (e) {
                                    if (thisCharInResult.indexOf(char[1]) == -1) {
                                        result[char[0]].push(char[1])
                                    }
                                }
                            }
                        }
                    )
                }
            )

            // "натурально" сортируем массивы, нсли это массивы конечно
            let values = Object.values(result)
            values.forEach(
                (possibleArray) => {
                    if (Array.isArray(possibleArray)) {
                        console.log(possibleArray)

                        try { // if possibleArray can be split
                            if (!isNaN(possibleArray[0].split(" ")[0])) { // if it should be sorted more "naturally"
                                possibleArray.sort(function (a, b) {
                                    return a.split(" ")[0] - b.split(" ")[0];
                                })
                            } else {
                                possibleArray.sort()
                            }
                        } catch (e) {
                            possibleArray.sort()
                        }
                    }
                }
            )

            return result
        }
        function renderItemsProps(itemsProps) {
            let x
        }
    }*/
    function render_(items_) {
        /* рендерит товары и пагинацию */

        // сортируем массив
        function sortArray(array) {
            let searchParams = new URLSearchParams(window.location.search)
            let sortMode, btn_
            if (searchParams.has("sortMode")) {
                sortMode = searchParams.get("sortMode")
            }

            switch (sortMode) {
                case "byPrice_chipper":
                    array.sort((prev, next) => prev.itemPrice - next.itemPrice);

                    btn_ = document.querySelector(".__sortOption_byPrice_chipper")
                    break

                case "byPrice_moreExpensive":
                    array.sort((prev, next) => prev.itemPrice - next.itemPrice);
                    array.reverse()

                    btn_ = document.querySelector(".__sortOption_byPrice_moreExpensive")
                    break

                default:
                    array.sort((prev, next) => prev.itemId - next.itemId);

                    btn_ = document.querySelector(".__sortOption_byDefault")
                    break

            }
            markSortBtn(btn_)

        }

        // разбиваем на странички
        let subarrays = []
        let forPagination = [] // нужно для рендера пагинации
        function splitArray(array) {
            // разбиваю весь массив товаров, на суб-массивы (они - это странички пагинации)
            let size = subArrayLength; // длина каждого суб-массива

            for (let i = 0; i < Math.ceil(array.length/size); i++){
                subarrays[i] = array.slice((i*size), (i*size) + size);

                forPagination[i] = i + 1
            }
        }

        function whatPageToRender() {
            // определяем какую страничку надо отрендерить
            let pageToRender

            let searchParams = new URLSearchParams(window.location.search)
            if (searchParams.has("page")) {
                pageToRender = searchParams.get("page")
            } else {
                pageToRender = 1
            }

            return pageToRender
        }

        function render_pagination(pageToRender) {
            function PaginationBtn(props) {
                function goToPage(event, number) {
                    // добавляем гет параметр в ссылку
                    let urlParams = new URLSearchParams(window.location.search)
                    urlParams.set("page", number)
                    window.location.search = urlParams

                    // подцветка)
                    event.target.style.color = mainColor
                }

                return (
                    <div className="pagination-btn" style={(props == pageToRender) ? {color: mainColor} : {}}
                         key={props} onClick={() => goToPage(event, props)}>{props}</div>
                )
            }



            ReactDOM.render(
                forPagination.map((num)=>{return PaginationBtn(num)}),
                pagination
            )
        }
        function render_items() {
            // то что будет отображено
            let newElems = subarrays[pageToRender - 1].map( (el) => {return (
                ItemBlock_long(el)
            )})

            // рендер
            ReactDOM.render(
                newElems,
                itemsList
            )
        }

        /* выполнение функции */
        sortArray(items_)
        splitArray(items_)
        let pageToRender = whatPageToRender()
        render_pagination(pageToRender)
        render_items()
    }


    let itemsToRender = getItemsFromServer()
    render_(itemsToRender)
}

render_searchPage()