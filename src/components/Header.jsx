import { NavLink } from 'react-router-dom'
import '../css/Header.sass'
import logo from '../assets/LOGO.png'

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <NavLink to="/">
                    <img src={logo} alt="Kasa" />
                </NavLink>
            </div>
            <nav className="header__nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header
