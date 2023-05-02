import React from "react";
import "../footerComponents/links.css"


function LINKS () {
    return (
        <div className="link"
        >
        <ul>
            <h5>Secciones</h5>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Carrito</a></li>
            <li><a href="#">**</a></li>
            <li><a href="#">**</a></li>
            <li><a href="#">**</a></li>
        </ul>
        <ul>
            <h5>Proveedores</h5>
            <li><a href="#">El campo de Jorge</a></li>
            <li><a href="#">Eden</a></li>
            <li><a href="#">Mary Jane</a></li>
            <li><a href="#">El sol</a></li>
            <li><a href="#">Flores de la Patagonia</a></li>
        </ul>
        <ul>
            <h5>Sobre Nosotros</h5>
            <li><a href="#">Comienzos</a></li>
            <li><a href="#">Otros proyectos</a></li>
            {/* <li>**</li>
            <li>**</li>
            <li>**</li> */}
        </ul>
        <ul>
            <h5>Pedidos Especiales</h5>
            <li><a href="#">Bodas</a></li>
            <li><a href="#">Cumpleanos</a></li>
            <li><a href="#">Funerales</a></li>
            <li><a href="#">Aniversarios</a></li>
        </ul>

        </div>
    );
}

export default LINKS;