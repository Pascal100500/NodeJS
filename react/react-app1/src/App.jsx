import './App.css'

function App() {

  return (
    <>
    <h1>Мои любимые книги</h1>
      <div className="grid">
        <div className="cell">
          Название книги
        </div>
        <div className="cell">
          Автор книги
        </div>
        <div className="cell">
          Жанр
        </div>
        <div className="cell">
          Рецензия
        </div>
      

      
        <div class="cell">
          1984
        </div>
        <div className="cell">
          Д. Оруэлл
        </div>
        <div className="cell">
          Роман-Антиутопия
        </div>
        <div className="cell">
          <p>
            В книге изображена тоталитарная система, пришедшая на смену капитализму. При этом новое общество полностью отрицает свободу и автономию личности.
            </p> 
        </div>
      

      
        <div className="cell">
          Пятый элефант
        </div>
        <div className="cell">
          Т. Пратчетт
        </div>
        <div className="cell">
          Фэнтези
        </div>
        <div className="cell">
          <p>
            «Пятый элефант» — юмористическое фэнтези известного английского писателя Терри Пратчетта, написано в 1999 году.
             Двадцать четвёртая книга цикла «Плоский мир», пятая книга из цикла о Страже. 
            </p> 
        </div>
      </div>
    </>
  )
}

export default App
