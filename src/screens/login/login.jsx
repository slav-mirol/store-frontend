import React from 'react';
import './login.css';
import {Link} from "react-router-dom";
import '../../assets/Inter-SemiBold.otf';
import axios from 'axios';
import { useState } from 'react';

const url = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }



const Login = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    async function auth() {
         const result = await url
             .post("/user/auth", JSON.stringify({
                 "email": email,
                 "password": password
             }), config)
             .then((response) => {
                 return response.data;
             })
             .catch((error) => {
                 return error;
             });

        setUser(result['user_info']);
      }
  return (
    <div className="scr_login">
        <p className='title_login'>
            личный кабинет
        </p>
        <input className='inp_login' placeholder="электронная почта" onChange={(input) => {setEmail(input.target.value);}}/>
        <input className='inp_login' placeholder="пароль" onChange={(input) => {setPassword(input.target.value);}}/>
        <div className="navigation">
            <Link to='/'>
                <button className='btn_login' style={{marginRight: 165}} onClick={auth}>
                    <p className='login_text'> войти </p>
                </button>
            </Link>
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