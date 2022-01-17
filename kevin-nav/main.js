
const primeNav = document.querySelector(".prime-nav")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener('click', () => {
  const visiblity = primeNav.getAttribute('data-visible')
  if (visiblity === "false") {
    primeNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else {
      primeNav.setAttribute('data-visible', false)
      navToggle.setAttribute('aria-expanded', false)
    }
  })
