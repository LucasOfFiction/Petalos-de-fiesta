import '../styles/product.css';


const Product = ({data, addToCart}) => {
    
    const {id, name, price, old, img} = data;

    return (

        <div className='product_box' >
            <img className='product_img' src={img} alt={name} width="250px" height='200px' />
            <h3> {name} </h3>
            <h4 className='product_price' > ${price} <span className='old_price' > ${old} </span> </h4>
            <button href="#" className='product_btn' onClick={() => addToCart(id)}>Agregar al Carro</button>
        </div>
    );
};

export default Product;