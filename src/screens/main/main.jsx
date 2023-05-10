import React from 'react';
import Logo from './logo';
import {Link} from "react-router-dom";
import './main.css';

const Main = () => {
    return (
      <div className="scr_main">
          <header className='main-header'>
            <Logo/>
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
          <div>
            

          </div>
      </div>
    );
}

export default Main;