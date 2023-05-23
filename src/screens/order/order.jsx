import React from "react";
import Logo from "../../components/logo1";
import Navigation from "../../components/navigation/navigation";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import OrderElement from "../../components/order-element/order-element";

const Order = () =>{
    return (
        <div className="scr-cart">
            <Logo/>
            <Navigation />
            <ProfileNavigation where='order'/>
            <p className='prom-text'> new arrivals </p>
            <p className='prom-text'> collection </p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className='cart-table'>
                    <div className='head-table'>
                        <p className='title-table' style={{marginLeft:25}}> TIMESTAMP </p>
                        <p className='title-table'> ORDER NUMBER </p>
                        <p className='title-table'> STATUS </p>
                        <p className='title-table' style={{marginRight:40}}> TOTAL </p>
                    </div>
                    <div className='line-table'/>
                    <OrderElement ord={Orders[0]}/>
                    <OrderElement ord={Orders[1]}/>
                    <OrderElement ord={Orders[2]}/>
                    <div className='line-table'/>
                    
                    
                </div>
                
            </div>
        </div>
      );
}

export default Order;

const Orders = [
    {
        time: "10:25 24.04.2023",
        number:21346,
        status: "PENDING",
        total: 1050,
    },
    {
        time: "10:25 24.04.2023",
        number:21345,
        status: "ACCEPTED",
        total: 1050,
    },
    {
        time: "10:25 24.04.2023",
        number:15,
        status: "DENIED",
        total: 1050,
    },
]