import '../styles/product.css';

const Product = ({data, addToCart}) => {
    
    const {id, name, price, img} = data;

    return (

        <div>
            <img src={img} alt={name} width="250px" height='200px' />
            <h3> {name} </h3>
            <h4> ${price} </h4>
            <button className='product_btn' onClick={() => addToCart(id)}>Agregar al Carro</button>
        </div>
    );
};

export default Product;