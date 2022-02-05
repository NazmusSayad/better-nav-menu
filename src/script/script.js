const navGap = document.querySelector("#navMenu .gap")
const mainContainer = document.querySelector("#navMenu .containerMain")
const extraContainer = document.querySelector("#navMenu .containerExtra .listItem")
let documentInnerWidth = innerWidth
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
