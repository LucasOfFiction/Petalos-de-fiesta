import React, { Component } from "react";
import { Nav } from "react-bootstrap" ;
import "./navbar.css"; 
import "./Vector.png";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            {/*hacer responsive logo */}

            <div className="container-fluid">
                {/* logo ubicado a la izquierda */}
                <a className="navbar-brand" href="#"> 
                    <img  id ="logo" className="img-thumbnail rounded float-start" src="./Vector.png" alt="logo" />
                </a>

            {/*hacer responsive lista de anclas */}

                <div className="d-flex collapse navbar-collapse" id="navbarNavDropdown">
                    {/*lista de anclas de la pagina */}
                    <ul className="navbar-nav me-auto">

                        <li className="p-3 ml-1 nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Redes</a>
                        </li>

                        <li className="p-3 nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>

                        <li className="p-3 nav-item">
                            <a className="nav-link" href="#">Sobre nosotros</a>
                        </li>
                        {/* DROPDOWN, desplegable */}
                        <li className="p-3 nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Servicios
                            </a>
                            
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Decora tu evento</a></li>
                                <li><a className="dropdown-item" href="#">Arreglos florales</a></li>
                                <li><a className="dropdown-item" href="#">Mayorista</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/*HACER RESPONSIVE LISTA DE ICONOS */}

                <div className="d-flex collapse navbar-collapse align-self-end">
                    {/* ICONOS UBICADOS A LA DERECHA */}
                    <ul className="list-group list-group-horizontal">
                        <ul className="p-2 nav-item">
                            <button id="icono" className=" icon-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </ul>
                        <ul className="p-2 nav-item ">
                            <button id="icono" className=" icon-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg>
                            </button>
                        </ul>
                        <ul className="p-2 nav-item">
                            <button id="icono" className=" icon-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>
                        </ul>
                    </ul>
                </div>   
            </div>     
        </nav>
    );
}



