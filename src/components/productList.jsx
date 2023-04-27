import { TYPES } from "../actions/actions";
import { useReducer, useEffect } from "react";
import { shoppingReducer, shoppingInitialState } from "../reducers/reducer";
import styles from '../styles/product.css?inline';
import axios from "axios";
import Product from "./product";

const ProductList = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart} = state

    const updateState = async () => {
        const resProducts = await axios("http://localhost:3000/products");
        const newProduct = await resProducts.data
    
        dispatch({type: TYPES.READ_STATE, payload: [newProduct]})
    }
    
    useEffect(() => {
        updateState()
    }, [])
    
    const addToCart = (id) => {
        //console.log(id)
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

    return (
        <>
            <h2 className="product_title">Productos en Oferta</h2>
            <div className="product_div">
                {products.map((product) => <Product key={product.id}
                    data={product} addToCart={addToCart} />)}
            </div>
        </>
    );

};

export default ProductList
