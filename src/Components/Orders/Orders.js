import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const handleRemoveItem = product => {
        const rest = cart.filter(item => item._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {cart.map(product => <ReviewItem key={product._id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/shipment'}>
                        <button>
                            Proceed Checkout
                        </button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;