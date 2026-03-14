import viteLogo from './assets/vite.svg' //Добавил импорт, иначе после build путь к изображению меняется

export function renderCards(container, cards) {

  cards.forEach(card => {

    const newCard = document.createElement("div")
    newCard.classList.add("card")

    newCard.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `

    container.appendChild(newCard)

  })

}