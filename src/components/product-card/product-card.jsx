import React from 'react';
import './product-card.css';
import {Link} from "react-router-dom";
import '../../assets/Inter-SemiBold.otf';
import Products from '../array-products';
import Product from '../../screens/product/product';

const ProductCard = ({
    prod,
    bw,
}) => {
  return (
    <div>
    <Link to={{pathname: `/product/${prod.id}`, state: {product: prod}}}>
        <div className='btn-product-card' style={{border:"none"}}>
            <div className='img-container'>
                <img className='img-product-card' src={prod.image}/>
            </div>
            <div>
                {bw==='1' ?
                <div className='info-product-card'>
                    <p className='text-info-card' style={{color:'black'}}>{prod.name}</p>
                    <p className='text-info-card' style={{color:'black'}}>{prod.price}</p>
                </div>
                :
                <div className='info-product-card'>
                    <p className='text-info-card'>{prod.name}</p>
                    <p className='text-info-card'>{prod.price}</p>
                </div>
                }
            </div>
        </div>
    </Link>
    </div>
  )
}

export default ProductCard;

