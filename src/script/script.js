const navGap = document.querySelector("#navMenu .gap")
const mainContainer = document.querySelector("#navMenu .containerMain")
const extraContainer = document.querySelector("#navMenu .containerExtra .listItem")
let documentInnerWidth = innerWidth
const fixNavLinks = () => {
  const currentDocumentInnerWidth = innerWidth
  let gap = navGap.clientWidth

  if (documentInnerWidth < currentDocumentInnerWidth) {
    let element = extraContainer.firstElementChild
    let elementWidth = element ? element.clientWidth : Infinity
    while (gap > elementWidth && element) {
      mainContainer.append(element)
      // Update lastElementChild & Gap
      element = extraContainer.firstElementChild
      elementWidth = element ? element.clientWidth : Infinity
      gap = navGap.clientWidth
    }
    console.log("big")
  } else {
    let element = mainContainer.lastElementChild
    while (!gap && element) {
      extraContainer.prepend(element)
      // Update lastElementChild & Gap
      element = mainContainer.lastElementChild
      gap = navGap.clientWidth
    }
    console.log("small")
  }
  console.log(documentInnerWidth)
  documentInnerWidth = currentDocumentInnerWidth
}
fixNavLinks()
window.addEventListener("resize", fixNavLinks)
