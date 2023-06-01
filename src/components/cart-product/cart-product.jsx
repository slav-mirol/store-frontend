import React from "react";
import { useState, useEffect } from "react";
import "./cart-product.css";

const CartProduct = ({
    product,
    quantity,
    setTotal,
    total
}) => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        setCount(quantity);
      }, []);
      console.log(product);
    return (
        <div className="cart-product">
            <div style={{display:"flex", flexDirection:"row"}}>
                <div className="cart-img-container">
                    <img className="cart-img" src={product.image}/>
                </div>
                <p className="cart-text"  style={{width:67}}>{product.name}</p>
            </div>
            <div className="cart-info">
                
                <p className="cart-text" style={{marginLeft:50}} >${product.price}</p>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <button className="btn-table" style={{marginLeft:165}} onClick={
                        () => {
                            if(count>1) {
                                setCount(count - 1);
                                setTotal(total - product.price);
                            }
                        }
                    }>
                        <p className="cart-text">-</p>
                    </button>
                    <p className="cart-text" style={{marginLeft:9,marginRight:9,}}>{count}</p>
                    <button className="btn-table" onClick={
                        () => {
                            setCount(count + 1);
                            setTotal(total + product.price);
                        }
                    }>
                        <p className="cart-text">+</p>
                    </button>
                </div>
                <p className="cart-text" style={{marginLeft:168}}>${product.price * count}</p>
                <button className="btn-table" style={{marginTop:48, marginLeft:50}}>
                    <p className="cart-text">X</p>
                </button>
            </div>
        </div>
    );
}

export default CartProduct;