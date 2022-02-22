
const sw = document.querySelector('.switch')
const con = document.querySelector('.con')
let active = false
con.addEventListener('click', () =>{
  sw.classList.toggle('switch-trans')
  con.classList.toggle('con-bg')
  document.body.classList.toggle('dark')
  active ? active = false : active = true
})

