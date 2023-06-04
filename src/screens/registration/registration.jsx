import React from 'react';
import './registration.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const url = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

const config = {
    headers: {
      "Content-Type": "application/json",
    }
}

const Registration = (props) => {
    const [user, setUser] = useState({
        "email": "",
        "first_name": "",
        "last_name": "",
        "adress": "",
        "phone": "",
        "password": ""
    });

    async function createUser(user) {
        const result = await url
            .post("/user/create", JSON.stringify({
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "adress": user.adress,
                "phone": user.phone,
                "password": user.password
            }), config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
            return result;
    }

  return (
    <div className="scr_login">
        <p className='title_login'>
            регистрация
        </p>
        <input className='inp_register' placeholder="электронная почта" onChange={(e)=>{setUser({...user, "email": e.target.value})}}/>
        <input className='inp_register' placeholder="пароль" onChange={(e)=>{setUser({...user, "password": e.target.value})}}/>
        <input className='inp_register' placeholder="фамилия" onChange={(e)=>{setUser({...user, "first_name": e.target.value})}}/>
        <input className='inp_register' placeholder="имя" onChange={(e)=>{setUser({...user, "last_name": e.target.value})}}/>
        <input className='inp_register' placeholder="адрес" onChange={(e)=>{setUser({...user, "adress": e.target.value})}}/>
        <input className='inp_register' placeholder="телефон" onChange={(e)=>{setUser({...user, "phone": e.target.value})}}/>
        <div className="register_navigation">
            <Link to='/login'>
                <button className='btn_login' onClick={()=>{console.log(user);createUser(user)}}> 
                    <p className='login_text' style={{color: "red", marginLeft: 70}}> зарегистрироваться </p>
                </button>
            </Link>
        </div>
    </div>
  );
}

export default Registration;