let menuOpened = false
let menu = document.querySelector('.menu__list')
document.querySelector('.menu__burger').addEventListener('click', () => {
  if (menuOpened) {
    menu.style.display = 'none'
    menuOpened = false
  } else {
    menu.style.display = 'flex'
    menuOpened = true
  }
})

