import React from "react";
import {Link} from "react-router-dom";
import "./profile-navigation.css";

const ProfileNavigation = ( {
    where
} ) => {
    return (
        <div className='profile-navigation'>
              <Link to='/order'>
                  <button className='btn-navigation-u'>
                  { (where === "profile" || where === "cart" || where === "product") ?
                    <p className='txt-navigation'>
                        история заказов
                    </p> :
                    <p className='txt-navigation' style={{color:"red"}}>
                        история заказов
                   </p>
                  }
                  </button>
              </Link>
              <Link to='/profile'>
              <button className='btn-navigation-d'>
                  { (where == "profile") ?
                    <p className='txt-navigation' style={{color:"red"}}>
                     данные аккаунта
                    </p> :
                    <p className='txt-navigation'>
                    данные аккаунта
                   </p>
                  }
              </button>
              </Link>
          </div>
    );
}

export default ProfileNavigation;