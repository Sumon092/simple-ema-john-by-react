import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    // console.log(props);
    const { img, name, seller, ratings, price } = props.product;
    // console.log(props);
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price :$ {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='button-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;