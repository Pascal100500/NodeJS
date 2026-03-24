import Clock from './Clock'

function Header() {
  return (
    <header className="header">
        <section className="grid-header">

            <div>
            <h1>Моя персональная страница</h1>
            <p>Моя страница, созданная с помощью REACT</p>
            </div>

            <aside className='clock-card'>
                <Clock />            
            </aside>
       </section>
    </header>
  )
}

export default Header