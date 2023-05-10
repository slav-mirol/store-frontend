import React from 'react';
import './registration.css';
import {Link} from "react-router-dom";

const Registration = (props) => {
  return (
    <div className="scr_login">
        <p className='title_login'>
            регистрация
        </p>
        <input className='inp_register' placeholder="электронная почта"/>
        <input className='inp_register' placeholder="пароль"/>
        <input className='inp_register' placeholder="фамилия"/>
        <input className='inp_register' placeholder="имя"/>
        <div className="register_navigation">
            <Link to='/'>
                <button className='btn_login'> 
                    <p className='login_text' style={{color: "red", marginLeft: 70}}> зарегистрироваться </p>
                </button>
            </Link>
        </div>
    </div>
  );
}

export default Registration;