import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleTemoveFromCart = (id) => {
       const remaining = cart.filter(product => product.id !== id);
       setCart(remaining)
       removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(Product => <Reviewitem
                        key={Product.id}
                        product={Product}
                        handleTemoveFromCart={handleTemoveFromCart}
                    ></Reviewitem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;