import gerbFCB from './assets/gerbFCB.jpg'
import gerbReal from './assets/gerbReal.jpg'
import Achievements from './components/Achievements'
import ClubInfo from './components/ClubInfo'
import Team from './components/Team'
import './App.css'
import { useState } from 'react'
import bgImage from './assets/background/ball.jpg'

function App() {

  const clubs = [
  {
    name: "FC Barcelona",
    city: "Барселона",
    year: "1899",
    image: gerbFCB,
    cups: "26",
    goals: "5000",
    players: ["Messi", "Xavi", "Iniesta"]
  },
  {
    name: "Real Madrid",
    city: "Мадрид",
    year: "1902",
    image: gerbReal,
    cups: "35",
    goals: "6000",
    players: ["Ronaldo", "Benzema", "Modric"]
  }
]

const themes = ["theme-light", "theme-dark", "theme-blue"]
const randomTheme = themes[Math.floor(Math.random() * themes.length)]

const [selectedClub, setSelectedClub] = useState(null)
  
  return (
    <>
    <div className="page" style={{
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "repeat"
  }}>

    <h1 className="title">Выберите клуб для отображения</h1>

      <div className="button-container">
        {clubs.map((club, index) => (
          <button
          key={index}
          className={`btn ${selectedClub === index ? "active" : ""}`}
          onClick={() => setSelectedClub(selectedClub === index ? null : index)}
          >
            {club.name}
          </button>
         ))}
      </div>

      {selectedClub !== null && (
        <>
        <ClubInfo {...clubs[selectedClub]} theme={randomTheme} />
        <Achievements
              cups={clubs[selectedClub].cups} 
              goals={clubs[selectedClub].goals} 
              theme={randomTheme} 
        />
        <Team 
              players={clubs[selectedClub].players} 
              theme={randomTheme} 
        />
       </>
        )}

    </div>
    </>
  )
}

export default App
