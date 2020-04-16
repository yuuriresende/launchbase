

// const helmet = require('helmet');
// const app = express();
// app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
// /* tive que usar essa funcao para poder aparecer o iframe no mozilla */

const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card'); 

for (let card of cards){
  card.addEventListener("click", function(){
    const videoId = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector("iframe").src = ""
})


