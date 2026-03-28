import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import City from "./pages/City";
import Attraction from "./pages/Attraction";
import OtherAttractions from "./pages/OtherAttractions";
import Gallery from "./pages/Gallery";
import AddPhoto from "./pages/AddPhoto";
import UserPhotos from "./pages/UserPhotos";
import { useState } from "react";

function App() {

  const [photos, setPhotos] = useState([]);

  return (
    <>
      <div>

      <nav>
        <Link to="/">Город</Link> 
        <Link to="/attraction/1">Главная достопримечательность</Link> 
        <Link to="/others">Другие</Link> 
        <Link to="/gallery">Фото</Link>
        <Link to="/add-photo">Добавить фото</Link> 
        <Link to="/user-photos">Фото пользователей</Link>
      </nav>

      <Routes>
        <Route path="/" element={<City />} />
        <Route path="/attraction/:id" element={<Attraction />} /> {/* передача параметра в ссылке */}
        <Route path="/others" element={<OtherAttractions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/add-photo" element={<AddPhoto photos={photos} setPhotos={setPhotos} />} />
        <Route path="/user-photos" element={<UserPhotos photos={photos} />} />
      </Routes>

    </div>
    </>
  )
}

export default App
