import React from "react";

class ClubInfo extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.theme}`}>
        <div className="club-layout">
          <img
            src={this.props.image}
            alt={this.props.name}
            className="club-image"
          />

          <div className="club-info">
            <h2>{this.props.name}</h2>
            <p>Город: {this.props.city}</p>
            <p>Основан: {this.props.year}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ClubInfo;