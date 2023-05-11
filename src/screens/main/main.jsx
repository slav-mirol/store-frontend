import React from 'react';
import Logo from './logo';
import {Link} from "react-router-dom";
import './main.css';
import ProductCard from '../../components/product-card/product-card';

const Main = () => {
    return (
      <div className="scr_main">
          <header className='main-header'>
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
            
          </header>
          <p className='text-header-main'> store </p>
          <div className='list-products-white'>
            <ProductCard image='http://drive.google.com/uc?export=view&id=1o1WkjkAyMFKyzYKt9cY6UrGz5j-xzlGU'
                         name='t-shirt sunboy'
                         price='$20'
                         bw='1'/>
            <ProductCard image='http://drive.google.com/uc?export=view&id=1qvC58zQS1JolMnlJQXavaXSAr07q4DxV'
                         name='t-shirt man of good fortune'
                         price='$25'
                         bw='1'/>
            <ProductCard image='http://drive.google.com/uc?export=view&id=1-PUV9dbkM01z8oECWFnIc_SO_sy9LS2z'
                         name='t-shirt 00000000'
                         price='$30'
                         bw='1'/>
          </div>
          <div className='list-products-black'>
            <ProductCard image='http://drive.google.com/uc?export=view&id=1M0EGAiIRI7_cm_E2LrI32cIKAo3pd1GC'
                         name='t-shirt mockup 2'
                         price='$25'
                         bw='0'/>
            <ProductCard image='http://drive.google.com/uc?export=view&id=12NMcTUOl5yC176R9rnx1SoTSkbTg9-RY'
                         name='bomber jacket pretentious punk'
                         price='$199'
                         bw='0'/>
            <ProductCard image='http://drive.google.com/uc?export=view&id=1Rw6aGUE_mSbeXP39WYc8pBghlD5bsnCh'
                         name='down jacket l’imbécile'
                         price='$149'
                         bw='0'/>
          </div>
      </div>
    );
}

export default Main;