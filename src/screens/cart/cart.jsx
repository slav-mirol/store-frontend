import React from 'react';
import './cart.css';
import Navigation from '../../components/navigation/navigation';
import Logo from '../../components/logo1';
import Products from '../../components/array-products';
import CartProduct from '../../components/cart-product/cart-product';
import { useState } from 'react';
import { useEffect } from 'react';

const Cart = (props) => {
    const [total, setTotal] = useState(Products[0].price*2+Products[1].price*3);
  return (
    <div className="scr-cart">
        <Logo/>
        <Navigation />
        <p className='prom-text'> new arrivals </p>
        <p className='prom-text'> collection </p>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className='cart-table'>
                <div className='head-table'>
                    <p className='title-table' style={{marginLeft:25}}> ITEM </p>
                    <p className='title-table'> PRICE </p>
                    <p className='title-table'> QUANTITY </p>
                    <p className='title-table' style={{marginRight:40}}> TOTAL </p>
                </div>
                <div className='line-table'/>
                <CartProduct product={Products[0]} quantity={2} setTotal={setTotal} total={total}/>
                <CartProduct product={Products[1]} quantity={3} setTotal={setTotal} total={total}/>
                <div className='line-table'/>
                <div className='total-info'>
                    <div className='total-info-text'>
                        <p className='total-text'>SUBTOTAL:</p>
                        <p className='total-text' style={{marginLeft:70}}> ${total}</p>
                    </div>
                    <div className='line-table' style={{width: 177, marginTop:11,marginBottom:0}}/>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <button className='btn-add-cart' style={{marginTop:34, height:26, width: 61}}>
                            <p className='btn-text-add-cart'>
                                ORDER
                            </p>
                        </button>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    </div>
  );
}

export default Cart;