
import AC_DC from './assets/ACDC_Back_in_Black.jpg'
import Kino from './assets/Kino_sun.jpg'
import DM from './assets/DM_violator.jpg'
import './App.css'

function App() {

  return (
    <>
       <h1>Музыкальные группы</h1>

      <div className="grid">
        <div className="cell">
          Жанр
        </div>
        <div className="cell">
          Текущий состав
        </div>
        <div className="cell">
          Самый популярный альбом
        </div>
        <div className="cell">
          Обложка альбома
        </div>
      

      <div className="group-title">AC/DC</div>
        <div className="cell">
          РОК
        </div>
        <div className="cell">
          <ul>
            <li>Ангус Янг (Angus Young) — соло-гитара, иногда бэк-вокал (1973—наши дни)</li>
            <li>Фил Радд (Phil Rudd) — ударные, перкуссия (1975—1983, 1994—2015, 2018—наши дни; не выступает с 2023)</li>
            <li>Клифф Уильямс (Cliff Williams) — бас-гитара, бэк-вокал (1977—2016, 2018—наши дни; не выступает с 2024)</li>
            <li>Брайан Джонсон (Brian Johnson) — ведущий вокал (1980—2016, 2018—наши дни)</li>
            <li>Стиви Янг (Stevie Young) — ритм-гитара, бэк-вокал (2014—наши дни; концертный участник в 1988)</li>
          </ul>
        </div>
        <div className="cell">
          Back In Black
        </div>
        <div className="cell">
          <img src={AC_DC} alt="AC_DC" />
        </div>
      

      <div className="group-title">Кино</div>
        <div className="cell">
          РОК
        </div>
        <div className="cell">
          <ul>
            <li>Юрий Каспарян — соло-гитара, бэк-вокал (1983—1991, 2012, 2019—наст. время)</li>
            <li>Александр Титов — бас-гитара, бэк-вокал (1984—1985, 2019—наст. время)</li>
            <li>Игорь Тихомиров — бас-гитара, бэк-вокал (1985—1991, 2012, 2019—наст. время)</li>
          </ul>
        </div>
        <div className="cell">
          Звезда по имени солнце
        </div>
        <div className="cell">
          <img src={Kino} alt="Kino_sun" />
        </div>

        <div className="group-title">Depeche Mode</div>
        <div className="cell">
          Электронная
        </div>
        <div className="cell">
          <ul>
            <li>Дэйв Гаан — ведущий вокал (1980 — наши дни)</li>
            <li>Мартин Гор — гитары, клавишные, бэк и ведущий вокал (1980 — наши дни)</li>
          </ul>
        </div>
        <div className="cell">
          Violator
        </div>
        <div className="cell">
          <img src={DM} alt="DM_violator" />
        </div>

      </div> 
    </>
  )
}

export default App
