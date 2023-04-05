import React from 'react';
import './Reviewitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Reviewitem = ({ product, handleTemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price:<span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>${quantity}</span></p>
                <p></p>
            </div>
            <button onClick={() => handleTemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delet-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Reviewitem;