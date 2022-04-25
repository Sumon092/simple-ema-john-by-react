import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    // const [products, setProducts] = useProducts();//use our own state
    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/pageCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])

    useEffect(() => {
        console.log('local storage first line');
        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedCart);
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct);
        }
        setCart(savedCart);
        console.log('local storage finished');

    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, product];old line
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)} name="" id="">
                        <option value="10">10</option>
                        <option value="15" selected>15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                </div>

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/orders'}>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;