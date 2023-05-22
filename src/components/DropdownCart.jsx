import { TYPES } from "../actions/actions";
import { useContext, useSelector} from "react";
import CartContext from "./CartContext";
import { shoppingReducer, shoppingInitialState } from "../reducers/reducer";
import CardHeader from "react-bootstrap/esm/CardHeader";
import CardsDetails from "./CardsDetails";
import style from "../styles/DropdownCart.css"


function DropdownCart() {
    const {updateState, cart, dispatch} = useContext(CartContext);

    const deleteFromCart = (id, all = false) => {
        console.log(id, all)
        
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
        }
    };


    return (
        <div>
            <h3 style={{textAlign:"center"}} >Cart</h3>
            <div className="box">
                {cart.map((item, index) => <CardsDetails key={index}
                    data={item} deleteFromCart={deleteFromCart}/>)}
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <button  id="bc" className=' btn btn-primary' onClick={updateState}>Limpiar Carrito</button>
                    <button id='bc' className=' btn btn-primary'>
                        Comprar ahora
                    </button>
                </div>
            </div>
            <hr  style={{color:"gray"}}/>
        </div>

        
    )
}

export default DropdownCart;