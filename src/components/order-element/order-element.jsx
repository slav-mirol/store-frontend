import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./order-element.css";
import axios from 'axios';

const url = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }


const OrderElement = ( {
    ord,
    user
}) => {
    const [order, setOrder] = useState(ord);
    const [showStatuses, setShow] = useState(false);

    useEffect( () => {
       setOrder(ord);
    }, []);

    async function changeStatus(newStatus) {
        const result = await url
            .post("/orders/change-order-status", JSON.stringify({
                "id_order": ord.order.id,
                "new_status": newStatus
            }), config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });

        setShow(false);
        setOrder(result);
    }

    return (
        
        <div>
        { (user.is_staff === "True") ?
            <div className="order-element-admin">
                <p className="order-info-text">{order.order.id_user}</p>
                <p className="order-info-text">{order.order.date_joined}</p>
                <p className="order-info-text">{order.order.id}</p>
                { (showStatuses === false) ?
                    <div className="status-changer" style={{display:"flex", flexDirection:'row', justifyContent:'center'}}>
                        {(order.order.status == "ACCEPTED") ?
                            <p className="order-info-text" style={{color:"green"}}>{order.order.status}</p>
                            :
                            (order.order.status == "PENDING") ?
                            <p className="order-info-text" style={{color:"yellow"}}>{order.order.status}</p>
                            :
                            <p className="order-info-text" style={{color:"red"}}>{order.order.status}</p>
                        }
                        <button className="btn-order-status-changer" style={{marginLeft:10}} onClick={()=>{setShow(true)}}>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L0.803848 0L11.1962 0L6 9Z" fill="white"/>
                            </svg>
                        </button>
                    </div> 
                :
                    <div style={{display: "flex", flexDirection:"row", justifyContent:"center"}}>
                        <div className="status-changer" style={{display:"flex", flexDirection:'column',justifyContent:"flex-start"}}>
                            <button className="btn-order-status-changer" onClick={()=>{changeStatus("ACCEPTED")}}>
                                <p className="order-info-text" style={{color:"green"}}>ACCEPTED</p>
                            </button>
                            <button className="btn-order-status-changer" onClick={()=>{changeStatus("PENDING")}}>
                                <p className="order-info-text" style={{color:"yellow"}}>PENDING</p>
                            </button>
                            <button className="btn-order-status-changer" onClick={()=>{changeStatus("DENIED")}}>
                                <p className="order-info-text" style={{color:"red"}}>DENIED</p>
                            </button>
                        </div>
                        <button className="btn-order-status-changer" onClick={()=>{setShow(false)}}>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L11.1962 9L0.803848 9L6 0Z" fill="white"/>
                            </svg>
                        </button>
                    </div>   
                }
                <p className="order-info-text">${order.order.total}</p>
            </div>
        :
            <div className="order-element">
                <p className="order-info-text">{order.order.date_joined}</p>
                <p className="order-info-text">{order.order.id}</p>
                {(order.order.status == "ACCEPTED") ?
                    <p className="order-info-text" style={{color:"green"}}>{order.order.status}</p>
                :
                (order.order.status == "PENDING") ?
                    <p className="order-info-text" style={{color:"yellow"}}>{order.order.status}</p>
                :
                    <p className="order-info-text" style={{color:"red"}}>{order.order.status}</p>
                }
                <p className="order-info-text">${order.order.total}</p>
            </div>
        }
        </div>
    );
}


export default OrderElement;