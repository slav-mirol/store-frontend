import React from "react";
import {Link} from "react-router-dom";

const Navigation = ({user}) => {
    return (
        <div className='header-navigation'>
              {!user ? <Link to='/login'>
                  <button className='btn-navigation-l'>
                  <p className='txt-navigation'>
                      аккаунт
                  </p>
                  </button>
              </Link>
              :
                <Link to='/profile'>
                    <button className='btn-navigation-l'>
                    <p className='txt-navigation'>
                        аккаунт
                    </p>
                    </button>
                </Link>
              }
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