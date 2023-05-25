import React from 'react';
import './product-card.css';
import {Link} from "react-router-dom";
import '../../assets/Inter-SemiBold.otf';
import Products from '../array-products';
import Product from '../../screens/product/product';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prod: {},
            bw: '0',
            user: {}

        }
    }
  render() {
        return (
        <div>
        <Link to={{pathname: `/product`, state: {product: this.props.prod, user: this.props.user}}}>
            <div className='btn-product-card' style={{border:"none"}}>
                <div className='img-container'>
                    <img className='img-product-card' src={this.props.prod.image}/>
                </div>
                <div>
                    {this.props.bw==='1' ?
                    <div className='info-product-card'>
                        <p className='text-info-card' style={{color:'black'}}>{this.props.prod.name}</p>
                        <p className='text-info-card' style={{color:'black'}}>{this.props.prod.price}</p>
                    </div>
                    :
                    <div className='info-product-card'>
                        <p className='text-info-card'>{this.props.prod.name}</p>
                        <p className='text-info-card'>{this.props.prod.price}</p>
                    </div>
                    }
                </div>
            </div>
        </Link>
        </div>
        )
    }
}




const ProductCard1 = ({
    prod,
    bw,
}) => {
  return (
    <div>
    <Link to={{pathname: `/product`, state: {product: prod}}}>
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

