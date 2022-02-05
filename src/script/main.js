const humBurgerClick = (self) => {
  if (self.classList.contains("active")) {
    self.classList.remove("active")
    document.body.classList.remove("navActive")
  } else {
    self.classList.add("active")
    document.body.classList.add("navActive")
  }
}
