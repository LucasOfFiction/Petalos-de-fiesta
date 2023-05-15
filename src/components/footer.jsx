import React from "react";
import REDES from "./footerComponents/redes";
import "../styles/footer.css";
import LINKS from "./footerComponents/links";



export default function Footer () {
    
       return (
        <div className="bg-image">
            <REDES/>
            <LINKS/>
            <div className= "rights">
                <p>Todos los derechos reservados por copyright</p>
                <p>Desarollado por *Nombre del grupooo*</p>
            </div>
             
        </div>
 );
}
