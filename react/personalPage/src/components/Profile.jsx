function Profile({ name, phone, email, city, photo }) {
  return (
    <section className="profile-card grid">
      <div className ="cell">
      <img src={photo} alt={name} className="profile-image" />
      </div>
      
      <div>
      <h2>{name}</h2>
      <p>Телефон: {phone}</p>
      <p>Email: {email}</p>
      <p>Город: {city}</p>
      </div>
    </section>
  )
}

export default Profile