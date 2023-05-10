import React from 'react';
import './login.css';
import {Link} from "react-router-dom";

const Login = (props) => {
  return (
    <div className="scr_login">
        <p className='title_login'>
            личный кабинет
        </p>
        <input className='inp_login' placeholder="электронная почта"/>
        <input className='inp_login' placeholder="пароль" />
        <div className="navigation">
            <button className='btn_login' style={{marginRight: 165}}>
                <p className='login_text'> войти </p>
            </button>
            <p className='login_text' style={{color: "red", marginRight: 5}}> или Вам нужна </p>
            <Link to='/registration'>
                <button className='btn_login'> 
                    <p className='login_text'> регистрация </p>
                </button>
            </Link>
            <p className='login_text' style={{color: "red"}}> ? </p>
        </div>
    </div>
  );
}

export default Login;