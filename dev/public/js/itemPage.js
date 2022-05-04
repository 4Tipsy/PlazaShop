const descAndBtnArea = document.querySelector(".item-description_and_comments-area")
const showDesc = descAndBtnArea.querySelector(".__btn-show-desc")
const showCom = descAndBtnArea.querySelector(".__btn-show-com")
const desc = descAndBtnArea.querySelector(".__description")
const com = descAndBtnArea.querySelector(".__comments")

showDesc.onclick = () => {
  if ( !(showDesc.classList.contains("__btn_active")) ) {
    showDesc.classList.add("__btn_active")
    showCom.classList.remove("__btn_active")
    desc.classList.remove("hidden")
    com.classList.add("hidden")
  }
}
showCom.onclick = () => {
  if ( !(showCom.classList.contains("__btn_active")) ) {
    showCom.classList.add("__btn_active")
    showDesc.classList.remove("__btn_active")
    com.classList.remove("hidden")
    desc.classList.add("hidden")
  }
}