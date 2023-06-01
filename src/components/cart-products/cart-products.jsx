import React from "react"
import { useState, useEffect } from "react";
import CartProduct from "../cart-product/cart-product"

import axios from 'axios';

const url = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }

const getProductsCart = async (user) =>  {
    let result =  await url
        .get("cart/get-cart?format=json", JSON.stringify({"id_user": user["id"]}),config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return result;
};

const CartProducts = ({
    setTotal,
    total, 
    user
}) => {
    const [products, setProducts]= useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await getProductsCart(user);
          setProducts(response);
        }
  
        fetchData();
    }, []);
    console.log(products);
    return (
        <div className="cart-products">
        {products.map((elem)=>{
            <CartProduct key={elem.id} product={elem} quantity={1} setTotal={setTotal} total={total}/>
        })}
        </div>
    )
}

export default CartProducts;