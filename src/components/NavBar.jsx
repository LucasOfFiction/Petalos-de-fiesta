import react from 'react';
import { Nav } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import logo from '/public/images/logo.png';
import style from '/src/styles/navbar.css';

export default function NavBar(){

    return(
        <>
                <Nav id='Nav1' className="navbar navbar-expand-lg bg-body-tertiary nav-bar-static-top">
                    <div className='container-fluid'>
                            {/*LOGO DE LA PÁGINA */}

                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="" width='100px'/>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                {/*LISTA DE ANCLAS Y DRPDOWNS DEL LADO IZQUIERDO DE LA PÁGINA */}
                                <ul id='ul1' className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li id='li1' className=" nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Productos</a>
                                    </li>
                                    <li id='li1' className=" nav-item">
                                        <a className="nav-link" href="#">Sobre nosotros</a>
                                    </li>
                                    <li id='li1' className=" nav-item">
                                        <a className="nav-link" href="#">Háblanos</a>
                                    </li>
                                    <li id='li1' className=" list-group col dropdown">
                                        <a className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                            Servicios
                                        </a>
                                            <ul id='ul' className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Decora tu evento</a></li>
                                                <li><a className="dropdown-item" href="#">Arreglos florales</a></li>
                                                <li><a className="dropdown-item" href="#">Mayorista</a></li>
                                            </ul>
                                    </li>

                                </ul>
                                {/*LISTA DESORDENADA DE ITEMS PARA COLOCARLOS A LA DERECHO DE LA PÁGINA */}
                                <ul id='ul' className="list-unstyled d-flex navbar-nav-outline-success  mb-2 mb-lg-0">
                                    <li id='li' className='p-2 nav-item'>
                                        <button id='redondo' className="redondo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                            </svg>
                                        </button>
                                    </li>
                                    <li id='li' className='p-2 nav-item'>
                                        <button id='redondo' className=""> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                        </button>
                                    </li>
                                    <li id='li' className='p-2 nav-item'>
                                        <button id='redondo' className=""> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg> 
                                        </button>
                                    </li>
                                </ul>

                            </div>
                    </div>
                </Nav>
            
        </>
    ) 
};