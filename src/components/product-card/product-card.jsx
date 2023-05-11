import React from 'react';
import './product-card.css';
import {Link} from "react-router-dom";
import '../../assets/Inter-SemiBold.otf';

const ProductCard = ({
    image,
    name,
    price,
    bw
}) => {
  return (
    <Link to='product'>
        <button className='btn-product-card' style={{border:"none"}}>
            <div className='img-container'>
                <img className='img-product-card' src={image}/>
            </div>
            <div>
                {bw==='1' ?
                <div className='info-product-card'>
                    <p className='text-info-card'>{name}</p>
                    <p className='text-info-card'>{price}</p>
                </div>
                :
                <div className='info-product-card'>
                    <p className='text-info-card' style={{color:'white'}}>{name}</p>
                    <p className='text-info-card' style={{color:'white'}}>{price}</p>
                </div>
                }
            </div>
        </button>
    </Link>
  )
}

export default ProductCard;

