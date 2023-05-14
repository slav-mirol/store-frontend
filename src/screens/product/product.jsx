import React from 'react';
import './product.css';
import Logo from '../../components/logo1';
import {Link} from "react-router-dom";
import Products from '../../components/array-products';



const Product = (id) => {
    const product = Products[id-1];
  return (
    <div className='product'>
        <Logo />
        <div className='header-navigation'>
            <Link to='/login'>
                <button className='btn-navigation-l'>
                  <p className='txt-navigation'>
                    аккаунт
                  </p>
                </button>
            </Link>
            <button className='btn-navigation-r'>
                <p className='txt-navigation'>
                  корзина
                </p>
            </button>
        </div>
        <p className='prom-text'> new arrivals </p>
        <p className='prom-text'> collection </p>
        <div className='product-info'>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div className='img-container'>
                    <img className='img-product-card' src={product.image}/>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <p className='text-info-card'>{product.name}</p>
                    <p className='text-info-card'>{product.description}</p>
                    <p className='text-info-card'>{product.price}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Product; 