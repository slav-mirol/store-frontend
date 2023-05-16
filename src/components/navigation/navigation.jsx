import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='header-navigation'>
              <Link to='/login'>
                  <button className='btn-navigation-l'>
                  <p className='txt-navigation'>
                      аккаунт
                  </p>
                  </button>
              </Link>
              <Link to='/cart'>
              <button className='btn-navigation-r'>
                  <p className='txt-navigation'>
                  корзина
                  </p>
              </button>
              </Link>
          </div>
    );
}

export default Navigation;