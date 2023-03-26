import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [Products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className='shop-container'>
            <div className='products-countainer'>
                {
                    Products.map(product => <Product
                      key={product.id}
                      product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;