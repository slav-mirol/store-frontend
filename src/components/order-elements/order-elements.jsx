import React from "react"
import { useState, useEffect } from "react";
import OrderElement from "../order-element/order-element";


const OrderElements = ({
    orders,
    user
}) => {
    return (
        <div className="cart-products">
        {orders.map((elem)=>(
            <OrderElement key={elem.order.id} ord={elem} user={user}/>
        ))}
        </div>
    )
}

export default OrderElements;