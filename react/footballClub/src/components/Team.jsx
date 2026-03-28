import React from "react";

class Team extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.theme}`}>
        <h3>Знаменитые Игроки</h3>
        <ul className="player-list">
          {this.props.players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Team;