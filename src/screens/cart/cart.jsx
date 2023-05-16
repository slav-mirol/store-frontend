import React from 'react';
import './cart.css';
import Navigation from '../../components/navigation/navigation';
import Logo from '../../components/logo1';

const Cart = (props) => {
  return (
    <div className="scr-cart">
        <Logo/>
        <Navigation />
        <p className='prom-text'> new arrivals </p>
        <p className='prom-text'> collection </p>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className='cart-table'>
                <div className='head-table'>
                    <p className='title-table'> ITEM </p>
                    <p className='title-table'> PRICE </p>
                    <p className='title-table'> QUANTITY </p>
                    <p className='title-table'> TOTAL </p>
                </div>
                <div className='line-table'></div>
            </div>
            <CartProduct />
        </div>
    </div>
  );
}

export default Cart;