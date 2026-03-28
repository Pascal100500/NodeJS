import { Link } from "react-router-dom";

function City() {
  return (
    <div>
      <h1 className="city-title">Рязань — один из древнейших городов России</h1>
      <p>
        Ряза́нь (до 1778 года — Переясла́вль-Ряза́нский).
        Город известен своей архитектурой, историческим центром и культурной жизнью.
      </p>
      <h3>Перейти к разделам:</h3>

      <ul className="list">
        <li><Link to="/attraction/1">Главная достопримечательность</Link></li>
        <li><Link to="/others">Другие достопримечательности</Link></li>
        <li><Link to="/gallery">Фотографии</Link></li>
      </ul>
    </div>
  );
}

export default City;