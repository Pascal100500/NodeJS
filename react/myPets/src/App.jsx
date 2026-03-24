import { useState } from 'react'
import Pet from './components/Pet'
import Header from './components/Header'
import Footer from './components/Footer'
import ImageShuchka from './assets/ImageShuchka.jpg'
import ImageBelka from './assets/ImageBelka.jpg'
import './App.css'

function App() {
   const [showPet1, setShowPet1] = useState(false)
   const [showPet2, setShowPet2] = useState(false)
  
    const pet1 = {
    name: "Жучка",
    species: "Собака",
    age: "4",
    photo: ImageShuchka,
    }

    const pet2 = {
      name: "Белка",
      species: "Кошка",
      age: "2",
      photo: ImageBelka,
    }

  return (
    <>
    <div className="verstka">
    <Header />

    <main className="content">
     <div className="button-container">
        <button
        className={`btn ${showPet1 ? "active" : ""}`}
        onClick={() => setShowPet1(!showPet1)}
        >
          Показать питомца №1
        </button>
    </div>
     
     <div className="pets-container">
     {showPet1 && <Pet {...pet1} />}
     </div>

    <div className="button-container">
        <button
        className={`btn ${showPet2 ? "active" : ""}`}
        onClick={() => setShowPet2(!showPet2)}
        >
          Показать питомца №2
        </button>
    </div>
  
     <div className="pets-container">
     {showPet2 && <Pet {...pet2} />}
     </div>
     </main>

    <Footer />
    </div>
    </>
  )
}

export default App
