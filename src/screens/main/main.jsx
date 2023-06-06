import React from 'react';
import {Link} from "react-router-dom";
import './main.css';
import Logo from './logo';
import ProductCard from '../../components/product-card/product-card';
import Products from '../../components/array-products';
import Navigation from '../../components/navigation/navigation';
import ProductsList from '../../components/products/products';

const Main = ({user}) => {
    return (
      <div className="scr_main">
          <header className='main-header'>
            <Logo />
            <Navigation user={user}/>
          </header>
          <p className='text-header-main'> store </p>
          <ProductsList user={user}/>
      </div>
    );
}

export default Main;