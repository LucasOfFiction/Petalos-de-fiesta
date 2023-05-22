import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const CardsDetails = ({data, deleteFromCart}) => {

    let {id, name, price, img, quantity} = data;


    return(
        <>
            <div className="container" width="24rem">

                <section className="container mt-3">

                    <div className="iteamsdetails">

                        <div className="items_img" style={{paddingLeft:"20px"}}>
                            <img src= {img}  style={{width:"5rem", height:"5rem"}} alt="" />
                        </div>

                        <div className="details">

                            <Table>
                                <tr>
                                    <td>
                                        <p> <strong>Producto:</strong>{name}</p>
                                        <p> <strong>Precio:</strong>${price} x {quantity} = ${price * quantity}</p>                                        
                                    </td>

                                    <td>
{/*                                        <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>4.5 ★	</span></p>*/}
                                        <button className='btn btn-outline-dark' onClick={() => deleteFromCart(id)}>Eliminar uno</button>

                                        <button className='btn btn-outline-dark' onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
                                    </td>
                                </tr>
                            </Table>

                        </div>
                        
                    </div>
                </section>
            </div>
        </>
    )
}
export default CardsDetails;
