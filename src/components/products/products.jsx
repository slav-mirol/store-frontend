import React from 'react';
import { useState,useEffect } from 'react';
import ProductCard from '../product-card/product-card';
import './products.css';

import axios from 'axios';

const url = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }

const getAllProducts = () => {
    let result = url
        .get("get-products?format=json")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return result;
};

const ProductsList = ({user}) => {
    const [Products, setProducts] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        const response = await getAllProducts();
        setProducts(response);
      }

      fetchData();
    }, []);
    let i = 0;
    console.log(Products);
    return (
        <div className='list-products'>
          { Products.map((elem, idx) => {
            if (i<3) {
              i += 1;
              return <ProductCard  key={elem.id} prod={elem} bw='0' user={user} />
            } else if (i<6) {
              i += 1;
              return <ProductCard  key={elem.id} prod={elem} bw='1' user={user} />
            } else {
              i = 0;
              return <ProductCard  key={elem.id} prod={elem} bw='0' user={user} />
            }
          })
          }
        </div>
    );
};

export default ProductsList;