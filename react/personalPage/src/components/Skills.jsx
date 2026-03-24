function Skills({ skills }) {
  return (
    <section className="skills-card">
      <h3>Навыки</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills