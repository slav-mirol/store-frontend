import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./order-element.css";

const OrderElement = ( {
    ord
}) => {
    const [order, setOrder] = useState({});
    useEffect(() => {
        setOrder(ord);        
    })
    return (
        <div className="order-element">
            <p className="order-info-text">{order.time}</p>
            <p className="order-info-text">{order.number}</p>
            {(order.status == "ACCEPTED") ?
                <p className="order-info-text" style={{color:"green"}}>{order.status}</p>
                :
                (order.status == "PENDING") ?
                <p className="order-info-text" style={{color:"yellow"}}>{order.status}</p>
                :
                <p className="order-info-text" style={{color:"red"}}>{order.status}</p>
            }
            <p className="order-info-text">${order.total}</p>
        </div>
    );
}



export default OrderElement;