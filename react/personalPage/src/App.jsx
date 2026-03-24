import { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import photoImage from './assets/Photo.jpg'
import './App.css'

function App() {
  const [showSkills, setShowSkills] = useState(true)

  const person = {
  name: "Максим Андреев",
  phone: "+79999999999",
  email: "MyEmail@email.com",
  city: "Рязань",
  photo: photoImage,
  skills: ["C#", "C++", "SQL"],
  experience: "2 года обучения"
}

  return (
    <>
    <Header />

      <Profile {...person} /> {/*Использую spread operator в props*/}
      <Experience experience={person.experience} /> 

     <div className="button-skills">
         <button className={`btn ${showSkills ? "active" : ""}`}
         onClick={() => setShowSkills(!showSkills)}>
         {showSkills ? "Скрыть навыки" : "Показать навыки"}
         </button>
    </div>
    {showSkills && <Skills skills={person.skills} />} {/* Условный РЕНДЕРИНГ!*/}
    
    <Footer />
    </>
  )
}

export default App
