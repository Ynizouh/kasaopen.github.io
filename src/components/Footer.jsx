import '../sass/Footer.sass'
import logo from '../assets/LOGO.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="Kasa" />
            </div>
            <p className="footer__text">
                © 2020 Kasa. All <br className="mobile-only-break" />rights reserved
            </p>
        </footer>
    )
}

export default Footer
