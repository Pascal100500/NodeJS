import React from "react";

class MagicBall extends React.Component {
  constructor(props) {
    super(props);

    this.answers = [
      "Да",
      "Нет",
      "Абсолютно точно",
      "Плохие шансы",
      "Вопрос не ясен",
      "Скорее да",
      "Скорее нет",
      "Без сомнений",
      "Очень вероятно",
      "Даже не думай",
      "Спроси позже",
      "Сейчас нельзя сказать",
      "Определённо да",
      "Мой ответ — нет",
      "Знаки говорят да",
      "Шансы невелики",
      "Перспективы хорошие",
      "Лучше не рассчитывать",
      "Можешь быть уверен",
      "Попробуй ещё раз"
    ];

    this.state = {
      answer: "Задай вопрос и нажми кнопку",
      visible: true,
      shaking: false
    };
  }

  getPrediction = () => {
    if (this.props.mode === "shake") {
      this.setState({ shaking: true });
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.answers.length);
        this.setState({
          answer: this.answers[randomIndex],
          shaking: false
        });
      }, 500);
    } 
    else {
      const randomIndex = Math.floor(Math.random() * this.answers.length);
      this.setState({ visible: false });
      setTimeout(() => {
        this.setState({
          answer: this.answers[randomIndex],
          visible: true
        });
      }, 400);
    }
  };
  render() {
    return (
      <div className="page">
      <h1>Магический шар предсказаний</h1>

      {/*Использую условный оператор для условного рендеринга*/}
      {this.props.mode === "shake" ? (

        // 👉 ВАРИАНТ 1 — классический шар
        <div className={`ball ${this.state.shaking ? "shake" : ""}`}>
          <div className="answer-window">
            <p>{this.state.answer}</p>
          </div>
        </div>

      ) : (

        // 👉 ВАРИАНТ 2 — плавный текст
        <div className="ball">
          <div className="answer-window">
            <p key={this.state.answer} className={`answer-text ${!this.state.visible ? "hidden" : ""}`}>
            {this.state.answer}
            </p>
          </div>
        </div>

      )}

      <button className="btn" onClick={this.getPrediction}>
        Получить предсказание
      </button>
    </div>
    );
  }
}

export default MagicBall;