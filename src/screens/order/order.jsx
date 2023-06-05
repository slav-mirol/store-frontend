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
    let result;
    if (user.is_staff === "True") {
        result = await url
            .get("orders/get-orders/all?format=json")
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    } else {
        result = await url
            .get("orders/get-orders/" + user["id"] + "?format=json")
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
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
            <Logo />
            <Navigation />
            <ProfileNavigation where='order'/>
            <p className='prom-text'> new arrivals </p>
            <p className='prom-text'> collection </p>
            { (user.is_staff === "True") ?
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className='cart-table'>
                        <div className='head-table'>
                            <p className='title-table' style={{marginLeft:25}}> USER EMAIL </p>
                            <p className='title-table'> TIMESTAMP </p>
                            <p className='title-table'> NUMBER </p>
                            <p className='title-table'> STATUS </p>
                            <p className='title-table' style={{marginRight:40}}> TOTAL </p>
                        </div>
                        <div className='line-table'/>
                        <OrderElements orders={orders} user={user}/>
                        <div className='line-table'/>
                    </div>
                </div>
            :
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className='cart-table'>
                        <div className='head-table'>
                            <p className='title-table' style={{marginLeft:25}}> TIMESTAMP </p>
                            <p className='title-table'> ORDER NUMBER </p>
                            <p className='title-table'> STATUS </p>
                            <p className='title-table' style={{marginRight:40}}> TOTAL </p>
                        </div>
                        <div className='line-table'/>
                        <OrderElements orders={orders} user={user}/>
                        <div className='line-table'/>
                    </div>
                </div>
            }
        </div>
      );
}

export default Order;
