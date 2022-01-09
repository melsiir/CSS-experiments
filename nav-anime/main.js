
const navList = document.querySelector('.nav-list')
cosrt g =
const navBtn = document.querySelector('.nav-btn')

const nav = document.querySelector('.nav')
let showNav = false;

navBtn.addEventListener('click', () => {
  nav.classList.toggle('hide')
  showNav = !showNav
})

