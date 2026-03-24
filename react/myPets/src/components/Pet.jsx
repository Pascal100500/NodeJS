function Pet({ name, species, age, photo }) {
  return (
    <div className="pet-card">
      <div className="pet-info">
      <h2>Имя: {name}</h2>
      <p>Вид: {species}</p>
      <p>Возраст: {age}</p>
      </div>
      <img src={photo} alt={name} className="pet-image" />
    </div>
  )
}

export default Pet