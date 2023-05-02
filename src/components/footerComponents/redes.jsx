import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import "../footerComponents/redes.css"


function REDES () {

    return (

        <div className= "redes">
                <h1>Encontranos en:</h1>
                <div className="icon">
                <a href="" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="#"><FontAwesomeIcon icon={faTelegram}/></a>
                </div>
            </div>
    );
    }

        export default REDES;
