import React from "react";
import Logo from "../../components/logo1";
import Navigation from "../../components/navigation/navigation";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import OrderElement from "../../components/order-element/order-element";
import OrderElements from "../../components/order-elements/order-elements";

import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

const url = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

const config = {
    headers: {
      "Content-Type": "application/json",
    }
}

const getOrders = async (user) =>  {
    let result = await url
        .get("orders/get-orders/" + user["id"] + "?format=json")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return result;
};

const Order = ({user}) => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        const response = await getOrders(user);
        setOrders(response);
      }

      fetchData();
    },[]);
    return (
        <div className="scr-cart">
            <Logo/>
            <Navigation />
            <ProfileNavigation where='order'/>
            <p className='prom-text'> new arrivals </p>
            <p className='prom-text'> collection </p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className='cart-table'>
                    <div className='head-table'>
                        <p className='title-table' style={{marginLeft:25}}> TIMESTAMP </p>
                        <p className='title-table'> ORDER NUMBER </p>
                        <p className='title-table'> STATUS </p>
                        <p className='title-table' style={{marginRight:40}}> TOTAL </p>
                    </div>
                    <div className='line-table'/>
                    <OrderElements orders={orders}/>
                    <div className='line-table'/>
                    
                    
                </div>
                
            </div>
        </div>
      );
}

export default Order;

const Orders = [
    {
        time: "10:25 24.04.2023",
        number:21346,
        status: "PENDING",
        total: 1050,
    },
    {
        time: "10:25 24.04.2023",
        number:21345,
        status: "ACCEPTED",
        total: 1050,
    },
    {
        time: "10:25 24.04.2023",
        number:15,
        status: "DENIED",
        total: 1050,
    },
]