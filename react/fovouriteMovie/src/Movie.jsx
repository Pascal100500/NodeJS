

function Movie({ title, director, year, studio, poster }) {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p>Режиссер: {director}</p>
      <p>Год: {year}</p>
      <p>Студия: {studio}</p>
      <img src={poster} alt={title} />
    </div>
  )
}

export default Movie