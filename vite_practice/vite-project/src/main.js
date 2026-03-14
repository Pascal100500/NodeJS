import './style.css'
import { cardsData } from './data.js'
import { renderCards } from './render.js'
import viteLogo from './assets/vite.svg' // импорт изображения для продакшен режима

const button = document.getElementById("changeTextBtn")

button.addEventListener("click", () => {
  button.textContent = "Button clicked!"
})

const cardsContainer = document.getElementById("cardsContainer")
renderCards(cardsContainer, cardsData)

// добавление новой карточки
const newCard = document.createElement("div")
newCard.classList.add("card")

//Старый вариант отображения изображения с подписями только для режима development
/*
newCard.innerHTML = `

  <img src="/src/assets/vite.svg" alt="NotImage">
  <h3>New Card</h3>
  <p>This card was added with JavaScript.</p>

`
*/

newCard.innerHTML = `

  <img src="${viteLogo}" alt="NotImage">
  <h3>New Card</h3>
  <p>This card was added with JavaScript.</p>

`
cardsContainer.appendChild(newCard)
