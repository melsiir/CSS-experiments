const main = document.querySelector(' main')

const mainBtn = document.querySelector('.btn')

const submitBtn = document.querySelector('.submit')

const exitBtn = document.querySelector('.exit')

const popUp = document.querySelector('.pop-up')

const togglePop = () => {
  popUp.classList.toggle('efs')
  popUp.classList.toggle('hide')
  mainBtn.classList.toggle('hide')

}

mainBtn.addEventListener('click', togglePop)

exitBtn.addEventListener('click', togglePop) 

submitBtn.addEventListener('click', togglePop)
