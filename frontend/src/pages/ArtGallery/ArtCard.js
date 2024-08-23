import React from 'react';
import { useNavigate } from "react-router-dom";

function ArtCard({ item, layout, image, search }) {
    const navigate = useNavigate();


    const formatDate = () => {
        let date = item.date.split('/');

        const toBCE = (date) => {
            return date.startsWith('-') ? (date.slice(1) + ' BCE') : date;
        }

        if (date.length === 2) {
            date[0] = toBCE(date[0]);
            date[1] = toBCE(date[1]);
            date = date.join(' - ');
        } else {
            date[0] = toBCE(date[0]);
            date = date[0];
        }

        return date;
    };

    //So everything isnt always highlighted
    if(search === '') {
        search = null;
    }

    //Uses the image property passed from Catalog to display the image
    return (
        <div
            className={`w3-card ArtCard w3-hover-shadow w3-hover-purple w3-margin w3-round-xlarge ${layout}`}
            onClick={() => navigate(`/exhibit?id=${item.id}`)}
        >
            <div className="spotlight-container w3-image w3-large">
                {item.image && (
                    <img
                        className='spotlight-image'
                        src={image.src}
                        alt={item.name}
                        loading={'lazy'}
                    />
                )}
            </div>
            <div>
                <h3 className={`w3-text-theme text-heading ${item.name.toLowerCase().includes(search) ? 'w3-yellow' : ''}`}>
                    <b>{item.id}. {item.name}</b>
                </h3>
                {item.artist_culture !== "None" && (
                    <div
                        className={`text-subheading ${item.artist_culture.toLowerCase().includes(search) ? 'w3-yellow' : ''}`}>
                        Artist/Culture: {item.artist_culture}
                    </div>
                )}
                {item.location !== "None" && (
                    <div
                        className={`text-subheading ${item.location.toLowerCase().includes(search) ? 'w3-yellow' : ''}`}>
                        Location Made: {item.location}
                    </div>
                )}
                {item.date !== "None" && (
                    <div
                        className={`text-subheading ${item.date.toLowerCase().includes(search) ? 'w3-yellow' : ''}`}>
                        Date: {formatDate()}
                    </div>
                )}
                <div className={`text-subheading ${item.unit.toString().includes(search) ? 'w3-yellow' : ''}`}>
                    Unit: {item.unit}
                </div>
            </div>
        </div>
    );
}

export default ArtCard;