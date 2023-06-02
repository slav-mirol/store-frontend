import React from 'react';
import './product.css';
import Logo from '../../components/logo1';
import {Link} from "react-router-dom";
import Products from '../../components/array-products';
import Navigation from '../../components/navigation/navigation';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation';

import axios from 'axios';

const url = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

const config = {
    headers: {
      "Content-Type": "application/json",
    }
}

const createCartStr = async (user, product) =>  {
  let result =  await url
      .post("orders/create-cart", JSON.stringify({"id_user": user["id"], "id_product": product["id"]}),config)
      .then((response) => {
          return response.data;
      })
      .catch((error) => {
          return error;
      });
  return result;
};

const getProductsCart = async (user) =>  {
    let result =  await url
        .get("cart/get-cart/" + user["id"] + "?format=json")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
        
    return result;
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      added : false,
      products: getProductsCart(this.props.location.state.user)
    }
  }
  async getCart(user) {
    const response = await getProductsCart(user);
        this.setState({products:response});
  }

render()  {
 console.log(this.state.products);
  return (
      <div className='product'>
          <Logo />
          <Navigation user={this.props.location.state.user}/>
          {(this.props.location.state.user) && <ProfileNavigation where="product"/>}
          <p className='prom-text'> new arrivals </p>
          <p className='prom-text'> collection </p>
          <div className='product-info'>
              <div style={{display:"flex", flexDirection:"row", justifyContent: "center"}}>
                  <div className='img-container' >
                      <img className='img-product-card' src={this.props.location.state.product.image} style={{border: "none"}}/>
                  </div>
                  <div style={{display:"flex", flexDirection:"column", marginLeft: 50, alignItems: "center"}}>
                      <p className='text-info-card'>{this.props.location.state.product.name}</p>
                      <p className='text-info-card'>{this.props.location.state.product.description}</p>
                      <p className='text-info-card'>{this.props.location.state.product.price}</p>
                      {(this.props.location.state.user) && 
                      <button className='btn-add-cart' onClick={
                        ()=>{
                          createCartStr(this.props.location.state.user, this.props.location.state.product);
                          this.setState({...this.props, added: true})
                        }
                        }>
                        <p className='btn-text-add-cart'>
                          add to cart
                        </p>
                      </button>
                      }
                      {(this.state.added === true) && <p style={{color:"white"}}>Вы добавили этот товар в корзину</p>}
                  </div>
              </div>
              
          </div>
      </div>
  );
  }
}




const Product1 = (id) => {
    const product = Products[id-1];
  return (
    <div className='product'>
        <Logo />
        <div className='header-navigation'>
            <Link to='/login'>
                <button className='btn-navigation-l'>
                  <p className='txt-navigation'>
                    аккаунт
                  </p>
                </button>
            </Link>
            <button className='btn-navigation-r'>
                <p className='txt-navigation'>
                  корзина
                </p>
            </button>
        </div>
        <p className='prom-text'> new arrivals </p>
        <p className='prom-text'> collection </p>
        <div className='product-info'>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div className='img-container'>
                    <img className='img-product-card' src={product.image}/>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <p className='text-info-card'>{product.name}</p>
                    <p className='text-info-card'>{product.description}</p>
                    <p className='text-info-card'>{product.price}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Product; 