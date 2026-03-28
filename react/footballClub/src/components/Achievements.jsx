import React from "react";

class Achievements extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.theme}`}>
        <h3>Достижения</h3>
        <p>Кубки: {this.props.cups}</p>
        <p>Голы: {this.props.goals}</p>
      </div>
    );
  }
}

export default Achievements;