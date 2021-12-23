const scrolls = 700

const tops = document.querySelector('.top')
const progress = document.getElementById('progress')

const goTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth'
  })
}
const scrollContainer = () => {
  return document.documentElement || document.body
}

document.addEventListener('scroll', () => {
  const scrollPrecenge = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100

  progress.style.width = `${scrollPrecenge}%`
  if (scrollContainer().scrollTop > scrolls) {
    tops.classList.remove('hidden')
  } else {
    tops.classList.add('hidden')
  }
})

tops.addEventListener('click', goTop)
