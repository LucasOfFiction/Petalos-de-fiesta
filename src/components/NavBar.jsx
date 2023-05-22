import react, {useState} from 'react';
import { useSelector} from 'react-redux';
import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import logo from '/public/images/logo.png';
import style from '/src/styles/navbar.css';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import CartContext from './CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import DropdownCart from './DropdownCart';




export default function NavBar(){



    const {updateState, cart, dispatch} = useContext(CartContext);

    const deleteFromCart = (id, all = false) => {
        console.log(id, all)
        
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
        }
    };

    const CartArray = cart;
    console.log(CartArray);



    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return(
        <>
                <Nav id='Nav1' className="navbar fixed-top navbar-expand-lg bg-body-tertiary nav-bar-static-top">
                    <div className='container-fluid'>
                            {/*LOGO DE LA PÁGINA */}
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="" width='100px'/>
                            </a>

                            {/* MENÚ HAMBURGUESA */}
                            <button className="navbar-toggler" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* /MENU HAMBURGUESA */}
                            

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            {/*ITEMS DE NAVBAR AL CENTRO DE LA PAGINA */}
                                    <ul id='ul1' className="navbar-nav">

                                        <li id='li1' className=" nav-item">
                                            <a className="nav-link active" aria-current="page" href="#product">Productos</a>
                                        </li>
                                        <li id='li1' className=" nav-item">
                                            <a className="nav-link active" href="#aboutus">Sobre nosotros</a>
                                        </li>
                                        <li id='li1' className=" nav-item">
                                            <a className="nav-link" href="#">Háblanos</a>
                                        </li>

                            {/* DROPDOWN DESPLEGABLE */}
                                        <li id='' className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            id='navbarDropdown'>
                                                Servicios
                                            </a>
                                                <ul id='ul' className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Decora tu evento</a></li>
                                                    <li><a className="dropdown-item" href="#">Arreglos florales</a></li>
                                                    <li><a className="dropdown-item" href="#">Mayorista</a></li>
                                                </ul>
                                        </li>
                            {/* /DROPDOWN DESPLEGABLE */}

                                    </ul>

                                    <hr className='text-dark-50'></hr>

                            {/*ICONOS DEL LADO DERECHO DE LA PÁGINA*/}
                                    <ul id='ul2' className="navbar-nav flex-row flex-wrap  ms-auto">
                                        <li id='li' className='nav-item col-4 col-sm-auto p-2'>
                                            <button id='redondo' className="redondo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                                </svg>
                                            </button>
                                        </li>
                                        <li id='li' className='nav-item col-4 col-sm-auto p-2'>
                                            <button id='redondo' className=""> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                </svg>
                                            </button>
                                        </li>

                            {/*ICONO DEL CARRITO*/}
                                        <li id='li' className='nav-item col-4 col-sm-auto p-2'>
                                                <button id='redondo' className="">

                                                    <Badge badgeContent={CartArray.length} color="primary"
                                                        id="basic-button"
                                                        aria-controls={open ? 'basic-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={handleClick}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="carti" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                        </svg> 
                                                    </Badge>

                                                </button>
                                        </li>
                            {/*/ICONO DEL CARRITO*/}
                                    </ul>
                            {/* /ICONOS DEL LADO DERECHO DE LA PAGINA*/}
                            </div>

                    </div>
                </Nav>




{/*PARTE DE LA LÓGICA DEL CARRITO */}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        CartArray.length ? 
                        <div className='card_details' style={{width:"24rem", padding:"10"}}>

                            {/*<Table>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CartArray.map((e)=>{
                                            return(
                                                <>
                                                <tr>
                                                    <td>
                                                        <img src={e.img} style={{width:"5rem", height:"5rem"}} alt="" />
                                                    </td>
                                                    <td>
                                                        <p>{e.name}</p>
                                                        <p>Precio: {e.price}$</p>
                                                        <p>Cantidad: {e.quantity}</p>
                                                        <p style={{color:"red", fontSize:"20", cursor:"pointer"}}>
                                                            <DeleteIcon onClick={() => deleteFromCart(id, true)} ></DeleteIcon>
                                                        </p>
                                                    </td>
                                                </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>*/}

                            <DropdownCart></DropdownCart>
                        </div>:
                            
                        <div className="card_details d-flex justify-content-center align-items-center"
                            style={{width:"24rem",padding:10,position:"relative"}}>
                            <>
                                <i  className='fas fa-close smallclose'onClick={handleClose}
                                    style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}} >
                                </i>

                                <p style={{fontSize:"18px", paddingTop:"10px", paddingLeft:"5px"}}>
                                    Tu carrito está vacío
                                </p>

                                <img src="/public/images/cart.gif" alt=""  style={{padding:10, width:"5rem"}} className='emptycart_img'/>
                                
                            </>
                            
                        </div>
                    }
                        
                </Menu>
        </>
    ) 
};