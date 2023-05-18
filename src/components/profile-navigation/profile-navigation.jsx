import React from "react";
import {Link} from "react-router-dom";
import "./profile-navigation.css";

const Navigation = () => {
    return (
        <div className='profile-navigation'>
              <Link to='/order'>
                  <button className='btn-navigation-u'>
                  <p className='txt-navigation'>
                      история заказов
                  </p>
                  </button>
              </Link>
              <Link to='/profile'>
              <button className='btn-navigation-d'>
                  <p className='txt-navigation'>
                     данные аккаунта
                  </p>
              </button>
              </Link>
          </div>
    );
}

export default Navigation;