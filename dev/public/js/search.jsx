
const search = document.querySelector(".search");



/* рендерим подсказки в поиске */
const searchTipsWrapper = document.querySelector("#search-tips-wrapper")

function SearchTip (props, key) {
  
  return (
    <option value={props} className="__tip" key={key}>{props}</option>
  )
}


ReactDOM.render(
  JSONdata.map(
    (item, index) => {return SearchTip(item.itemName, index)}
  ),
  searchTipsWrapper
)


