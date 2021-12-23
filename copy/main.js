
const btn = document.getElementById('btn')
const t = document.getElementById('t')

btn.addEventListener('click', () => {
  navigator.clipboard.writeText(t.innerText)
  alert('done')
})
