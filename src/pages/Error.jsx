import { Link } from 'react-router-dom'
import '../css/Error.sass'

function Error() {
    return (
        <div className="error">
            <h1 className="error__number">404</h1>
            <p className="error__message">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error
