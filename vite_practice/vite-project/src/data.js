//Добавляю импорт файлов, чтобы они отображались в режиме production
import jsLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImage from './assets/hero.png'

export const cardsData = [
  {
    title: "JavaScript FROM data.js",
    description: "IMPORT from data.js",
    //image: "/src/assets/javascript.svg"
    image: jsLogo
  },
  {
    title: "Vite FROM data.js",
    description: "IMPORT from data.js",
    //image: "/src/assets/vite.svg"
    image: viteLogo
  },
  {
    title: "Hero.png FROM data.js",
    description: "IMPORT from data.js",
    //image: "/src/assets/hero.png"
    image: heroImage
  }
]