import Clock from './Clock'

function Header() {
  return (
    <section className="header">
        <div>
            <h1>Животные любимцы</h1>
            <p>Еще одна пробная страница REACT</p>
        </div>

    <div className='clock-card'>
        <Clock />            
    </div>
    </section>
  )
}

export default Header