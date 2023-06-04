import React from 'react';
import './cart.css';
import Navigation from '../../components/navigation/navigation';
import Logo from '../../components/logo1';
import CartProducts from '../../components/cart-products/cart-products';
import { useState } from 'react';
import { useEffect } from 'react';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation';

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
    let result = await url
        .get("cart/get-cart/" + user["id"] + "?format=json")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return result;
};


const Cart = ({user}) => {
  const [total, setTotal] = useState(0);
  const [Products, setProducts] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        const response = await getProductsCart(user);
        setProducts(response);
      }

      fetchData();
    }, []);
    useEffect (
        () => {
            let startTotal = 0;
            Products.map((elem)=>{startTotal += Number(elem.price)});
            console.log(startTotal);
            setTotal(startTotal.toFixed(2));
        }, [Products]
    )
    async function createOrder(user) {
        let result = await url
        .post("orders/create-order", JSON.stringify({"id_user": user["id"], "adress": user["adress"], "total": total}), config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        }).then(()=>{setProducts([])});
        
    }
    console.log(Products)
  return (
    <div className="scr-cart">
        <Logo/>
        <Navigation user={user}/>
        {user && <ProfileNavigation  where='cart'/>}
        <p className='prom-text'> new arrivals </p>
        <p className='prom-text'> collection </p>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className='cart-table'>
                <div className='head-table'>
                    <p className='title-table' style={{marginLeft:25}}> ITEM </p>
                    <p className='title-table'> PRICE </p>
                    <p className='title-table'> QUANTITY </p>
                    <p className='title-table' style={{marginRight:40}}> TOTAL </p>
                </div>
                <div className='line-table'/>
                {(Products !== []) && <CartProducts products={Products} setTotal={setTotal} total={total} user={user}/>}
                <div className='line-table'/>
                <div className='total-info'>
                    <div className='total-info-text'>
                        <p className='total-text'>SUBTOTAL:</p>
                        <p className='total-text' style={{marginLeft:70}}> ${total}</p>
                    </div>
                    <div className='line-table' style={{width: 177, marginTop:11,marginBottom:0}}/>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <button className='btn-add-cart' style={{marginTop:34, height:26, width: 61}} onClick={()=>{createOrder(user);}}>
                            <p className='btn-text-add-cart'>
                                ORDER
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cart;