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
      console.log(total);
    return (
        <div className="cart-product">
            <div style={{display:"flex", flexDirection:"row"}}>
                <div className="cart-img-container">
                    <img className="cart-img" src={product.image}/>
                </div>
                <p className="cart-text"  style={{marginLeft:10,width:67}}>{product.name}</p>
            </div>
            <div className="cart-info">
                
                <p className="cart-text"  >${product.price}</p>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <button className="btn-table" onClick={
                        () => {
                            if(count>1) {
                                setCount(count - 1);
                                var a = Number(total).toFixed(2);
                                var b = Number(product.price).toFixed(2);
                                console.log(a-b);
                                setTotal(Number(total).toFixed(2) - Number(product.price).toFixed(2));
                            }
                        }
                    }>
                        <p className="cart-text">-</p>
                    </button>
                    <p className="cart-text" style={{marginLeft:9,marginRight:9,}}>{count}</p>
                    <button className="btn-table" onClick={
                        () => {
                            setCount(count + 1);
                            var a = Number(total).toFixed(2);
                            var b = Number(product.price).toFixed(2);
                            console.log(a+b);
                            setTotal(Number(total).toFixed(2) + Number(product.price).toFixed(2));
                        }
                    }>
                        <p className="cart-text">+</p>
                    </button>
                </div>
                <div></div>
                <p className="cart-text" >${Number(product.price).toFixed(2) * count}</p>
                <button className="btn-table" style={{marginTop:48, marginLeft:50}}>
                    <p className="cart-text">X</p>
                </button>
            </div>
        </div>
    );
}

export default CartProduct;