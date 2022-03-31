import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, price, quantity, shipping, img } = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-items-detail-container">
                <div className="review-item-detail" title={name}>
                    <p className="product-name">{name.length > 25 ? name.slice(0, 25) + '...' : name}</p>
                    <p>Price : <span className='orange-color'>{price}</span></p>
                    <p><small>Shipping :{shipping}</small></p>
                    <p><small>Quantity :{quantity}</small></p>
                </div>
                <div className="remove-button">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;