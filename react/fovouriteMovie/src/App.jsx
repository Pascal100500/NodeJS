import { useState } from 'react'
import posterInterstellar from './assets/posterInterstellar.jpg'
import Movie from './Movie'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const movie = {
  title: "Interstellar",
  director: "Кристофер Нолан",
  year: 2014,
  studio: "Warner Bros",
  poster: posterInterstellar
}

  return (
    <>
      <Movie
        title={movie.title}
        director={movie.director}
        year={movie.year}
        studio={movie.studio}
        poster={movie.poster}
      />
    </>
  )
}

export default App
