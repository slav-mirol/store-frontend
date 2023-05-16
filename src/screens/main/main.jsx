import React from 'react';
import {Link} from "react-router-dom";
import './main.css';
import Logo from './logo';
import ProductCard from '../../components/product-card/product-card';
import Products from '../../components/array-products';
import Navigation from '../../components/navigation/navigation';

const Main = () => {
    return (
      <div className="scr_main">
          <header className='main-header'>
            <Logo />
            <Navigation/>
          </header>
          <p className='text-header-main'> store </p>
          <div className='list-products-white'>
            <ProductCard prod={Products[0]}
                         bw='1'/>
            <ProductCard prod={Products[1]}
                         bw='1'/>
            <ProductCard prod={Products[2]}
                         bw='1'/>
          </div>
          <div className='list-products-black'>
            <ProductCard prod={Products[3]}
                         bw='0'/>
            <ProductCard prod={Products[4]}
                         bw='0'/>
            <ProductCard prod={Products[5]}
                         bw='0'/>
          </div>
      </div>
    );
}

export default Main;