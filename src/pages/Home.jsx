import { Link } from 'react-router-dom'
import logements from '../data/logements.json'
import bannerImg from '../assets/4706e7dde270fc8fc902a1eb738458e7b29c1899.jpg'
import '../sass/Home.sass'

function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <img
                    src={bannerImg}
                    alt="Paysage de la côte"
                />
                <h1 className="home__banner-text">
                    Chez vous, partout et ailleurs
                </h1>
            </div>

            <section className="home__gallery">
                {logements.map((logement) => (
                    <Link
                        to={`/logement/${logement.id}`}
                        className="home__card"
                        key={logement.id}
                    >
                        <img src={logement.cover} alt={logement.title} />
                        <h2 className="home__card-title">{logement.title}</h2>
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default Home
