import React from 'react';
import { useState,useEffect } from 'react';
import ProductCard from '../product-card/product-card';

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


    return (
        <div className='list-products-black'>
          { Products.map((elem)=>(
            <ProductCard key={elem.id} prod={elem} bw='0' user={user} />
          ))
          }
        </div>
    );
};

export default ProductsList;