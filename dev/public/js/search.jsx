const shading = document.querySelector(".shading");
const search = document.querySelector(".search");
const tipsWrapper = document.querySelector(".search-tips-wrapper"); // фокус/анфокус поиска

document.querySelector(".search").onfocus = function () {
  shading.classList.remove("hidden");
  tipsWrapper.style.display = "";
};

document.querySelector(".search").onblur = function () {
  shading.classList.add("hidden");
  tipsWrapper.style.display = "none";
};

search.oninput = function () {
  let texted = this.value.trim();
  let tips = document.querySelectorAll(".search-tips-wrapper > .__tip");



  // вывожу подсказки, которые подходят
  if (texted != '') {
    tips.forEach(function (elem) {
      if (elem.innerText.search(texted) == -1) {
        elem.classList.add("hidden");
      } else {
        elem.classList.remove("hidden");
        tipsWrapper.classList.remove("hidden");
      }
    });



    // делаю закругления на 1 и последней подсказке + отступы
    let showedTips = document.querySelectorAll(".search-tips-wrapper > .__tip:not(.hidden)")


      if (showedTips.length == 0) tipsWrapper.classList.add("hidden") // костыль

      showedTips.forEach(elem => {
        elem.style = "" //сброс изменений стиля js'ом
    })
      if (showedTips.length == 1) {
        showedTips[0].style.borderRadius = "10px"
    } else if (showedTips.length > 1) {
        showedTips[0].style.borderRadius = "10px 10px 0 0";
        showedTips[showedTips.length - 1].style.borderRadius = "0 0 10px 10px";
    }
      if (showedTips.length > 0) {
        showedTips[0].style.paddingTop = "0.45vw";
        showedTips[showedTips.length - 1].style.paddingBottom = "0.45vw";
      }



    // прячу все при пустом запросе
  } else {
    tipsWrapper.classList.add("hidden");
    tips.forEach(function (elem) {
      elem.classList.add("hidden")
    });
  }
};


/* рендерим подсказки в поиске */
const searchTipsWrapper = document.querySelector("#search-tips-wrapper")

function SearchTip (props, key) {
  function handleClick (whatToSearch) {
    /* DOESN'T WORK */
    let search = document.querySelector(".search")
    search.innerText = whatToSearch
  }
  return (
    <div className="__tip" key={key} onClick = {handleClick(props)}>{props}</div>
  )
}


ReactDOM.render(
  JSONdata.map(
    (item, index) => {return SearchTip(item.itemName, index)}
  ),
  searchTipsWrapper
)