import { TYPES } from "../actions/actions";
import { useContext, useSelector} from "react";
import CartContext from "./CartContext";
import { shoppingReducer, shoppingInitialState } from "../reducers/reducer";
import CardHeader from "react-bootstrap/esm/CardHeader";
import CardsDetails from "./CardsDetails";


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

    const calculateTotalPrice = () => {
        return(
            
            cart.reduce((total, product) => total + (product.price * product.quantity), 0)
            
        )
    };

    return (
        <div>
            <h3 style={{textAlign:"center"}} >Cart</h3>
            <div className="box">
                {cart.map((item, index) => <CardsDetails key={index}
                    data={item} deleteFromCart={deleteFromCart}/>)}
            </div>
                <br />
            <div className="container-fluid">
                <h4>TOTAL: {calculateTotalPrice()} $ </h4>
                <div className="row justify-content-md-center">
                    <button  id="bc" className=' btn btn-primary' onClick={updateState} style={{borderRadius:"0"}}>Limpiar Carrito</button>
                    <button id='bc' href="#" className=' btn btn-primary' style={{borderRadius:"0"}}>
                        Comprar ahora
                    </button>
                </div>
            </div>
        </div>

        
    )
}

export default DropdownCart;