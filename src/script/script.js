const humBurgerClick = () => {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active")
    document.body.classList.remove("navActive")
  } else {
    navMenu.classList.add("active")
    document.body.classList.add("navActive")
  }
}
const navMenu = document.querySelector("#navMenu")
const navGap = navMenu.querySelector(".gap")
const mainContainer = navMenu.querySelector(".containerMain")
const extraContainer = navMenu.querySelector(".containerExtra .listItem")
let documentInnerWidth = innerWidth
// -----------------------------------------------------
for (let item of extraContainer.querySelectorAll("a")) {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active")
    document.body.classList.remove("navActive")
  })
}
const fixNavLinks = () => {
  const currentWidth = innerWidth
  let gap = navGap.clientWidth

  if (documentInnerWidth > currentWidth) {
    let element = mainContainer.lastElementChild
    while (!gap && element) {
      extraContainer.prepend(element)
      element = mainContainer.lastElementChild
      gap = navGap.clientWidth
    }
  } else {
    let element = extraContainer.firstElementChild
    let elementWidth = element ? element.clientWidth : Infinity
    while (gap > elementWidth && element) {
      mainContainer.append(element)
      element = extraContainer.firstElementChild
      elementWidth = element ? element.clientWidth : Infinity
      gap = navGap.clientWidth
    }
  }

  documentInnerWidth = currentWidth
}
fixNavLinks()
window.addEventListener("resize", fixNavLinks)
