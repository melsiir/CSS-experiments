
const shareOptions = document.querySelector('.share-options')

document.querySelector('.share-button').addEventListener('click', (e) => {
  e.target.classList.toggle('active');
  shareOptions.classList.toggle('active')
})
