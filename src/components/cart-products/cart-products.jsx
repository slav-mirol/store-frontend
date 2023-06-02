import React from "react"
import { useState, useEffect } from "react";
import CartProduct from "../cart-product/cart-product"




const CartProducts = ({
    products,
    setTotal,
    total, 
    user
}) => {
    console.log(products)
    return (
        <div className="cart-products">
        {products.map((elem)=>(
            <CartProduct key={elem.id} product={elem} quantity={1} setTotal={setTotal} total={total}/>
        ))}
        </div>
    )
}

export default CartProducts;