import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./order-element.css";

const OrderElement = ( {
    ord,
    user
}) => {
    console.log(ord);
    return (
        <div className="order-element">
            <p className="order-info-text">{ord.order.date_joined}</p>
            <p className="order-info-text">{ord.order.id}</p>
            {(ord.order.status == "ACCEPTED") ?
                <p className="order-info-text" style={{color:"green"}}>{ord.order.status}</p>
                :
                (ord.order.status == "PENDING") ?
                <p className="order-info-text" style={{color:"yellow"}}>{ord.order.status}</p>
                :
                <p className="order-info-text" style={{color:"red"}}>{ord.order.status}</p>
            }
            <p className="order-info-text">${ord.order.total}</p>
        </div>
    );
}


export default OrderElement;