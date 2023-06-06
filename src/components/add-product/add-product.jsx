import React from 'react';
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

const AddProduct = (props) => {
    const [product, setProduct] = useState({
        "name": "",
        "description": "",
        "price": 0,
        "image": "",
        "quantity": 20,
        "category": 9
    });

    async function createProduct(product) {
        const result = await url
            .post("/create-products", JSON.stringify([{
                "name": product.name,
                "description": product.description,
                "price": product.price,
                "image": product.image,
                "quantity": 20,
                "category": 9
            }]), config)
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
            новый продукт
        </p>
        <input className='inp_register' placeholder="название" onChange={(e)=>{setProduct({...product, "name": e.target.value})}}/>
        <input className='inp_register' placeholder="описание" onChange={(e)=>{setProduct({...product, "description": e.target.value})}}/>
        <input className='inp_register' placeholder="цена" onChange={(e)=>{setProduct({...product, "price": e.target.value})}}/>
        <input className='inp_register' placeholder="ссылка на изображение" onChange={(e)=>{setProduct({...product, "image": e.target.value})}}/>
        <div className="register_navigation">
            <Link to='/'>
                <button className='btn_login' onClick={()=>{console.log(product);createProduct(product)}}> 
                    <p className='login_text' style={{color: "red", marginLeft: 70}}> добавить продукт </p>
                </button>
            </Link>
        </div>
    </div>
  );
}

export default AddProduct;