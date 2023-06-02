import React from "react"
import { useState, useEffect } from "react";
import OrderElement from "../order-element/order-element";




const OrderElements = ({
    oreders,
    user
}) => {
    return (
        <div className="cart-products">
        {oreders.map((elem)=>(
            <OrderElement key={elem.id} ord={elem}/>
        ))}
        </div>
    )
}

export default OrderElements;