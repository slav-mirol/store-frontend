import React from "react";

const CartProduct = (product, quantity) => {
    return (
        <div className="cart-product">
            <img src={product.image}/>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button></button>
            <p>{quantity}</p>
            <button>
                
            </button>
            <p>{product.price * quantity}</p>
            <button>

            </button>
        </div>
    );
}

export default CartProduct;