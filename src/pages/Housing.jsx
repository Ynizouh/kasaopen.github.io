import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import '../sass/Housing.sass'

function Housing() {
    const { id } = useParams()
    const logement = logements.find((l) => l.id === id)

    if (!logement) {
        return <Navigate to="/404" replace />
    }

    return (
        <div className="housing">
            <Slideshow pictures={logement.pictures} />

            <div className="housing__info">
                <div>
                    <div className="housing__title">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>

                    <div className="housing__tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="housing__host">
                    <div className="housing__host-info">
                        <div className="housing__host-name">
                            {logement.host.name.split(' ').map((namePart, index) => (
                                <span key={index}>{namePart}</span>
                            ))}
                        </div>
                        <img
                            className="housing__host-picture"
                            src={logement.host.picture}
                            alt={logement.host.name}
                        />
                    </div>
                    <div className="housing__rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= logement.rating ? 'star--filled' : 'star--empty'}
                            >
                                {star <= logement.rating ? (
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#FF6060" />
                                    </svg>
                                ) : (
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#E3E3E3" />
                                    </svg>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="housing__details">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    )
}

export default Housing
