const navMenu = document.querySelector("#navMenu")
const navGap = document.querySelector("#navMenu .gap")
const mainContainer = document.querySelector("#navMenu .containerMain")
const extraContainer = document.querySelector("#navMenu .containerExtra .listItem")
for (let item of mainContainer.querySelectorAll("a")) {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
}
const fixNavLinks = () => {
  let gap = navGap.clientWidth
  if (!gap) {
    let element = mainContainer.lastElementChild
    while (!gap && element) {
      extraContainer.prepend(element)
      // Update lastElementChild & Gap
      element = mainContainer.lastElementChild
      gap = navGap.clientWidth
    }
  } else {
    let element = extraContainer.firstElementChild
    let elementWidth = element ? element.clientWidth + 15 : 1000
    while (gap > elementWidth && element) {
      mainContainer.append(element)
      // Update lastElementChild & Gap
      element = extraContainer.firstElementChild
      elementWidth = element ? element.clientWidth + 15 : 1000
      gap = navGap.clientWidth
    }
  }
}
fixNavLinks()
window.addEventListener("resize", fixNavLinks)
