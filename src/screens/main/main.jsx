import React from 'react';
import Logo from './logo';
import './main.css';

const Main = () => {
    return (
      <div className="scr_main">
          <header className='main-header'>
            <Logo/>
            <div className='header-navigation'>
              <button className='btn-navigation-l'>
                <p className='txt-navigation'>
                  аккаунт
                </p>
              </button>
              <button className='btn-navigation-r'>
                <p className='txt-navigation'>
                  корзина
                </p>
              </button>
            </div>
          </header>
      </div>
    );
}

export default Main;