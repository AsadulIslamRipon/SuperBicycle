import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart, product} =props;
    const {img, name, price} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: {price}</p>
            </div>
            <button className='btn-info' onClick={ () => handleAddToCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;