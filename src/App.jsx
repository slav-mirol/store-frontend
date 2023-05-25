import React from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Main from './screens/main/main';
import Login from './screens/login/login';
import Registration from './screens/registration/registration';
import Product from './screens/product/product';
import Cart from './screens/cart/cart';
import Profile from './screens/profile/profile';
import Order from './screens/order/order';
import { useState } from 'react';



const App = () => {
  const [user, setUser] = useState(undefined);

  const WrappedMain = function(props) {
    return (<Main user={user} />);
  };
  const WrappedLogin = function(props) {
    return (<Login user={user} setUser={setUser}/>);
  };
  const WrappedCart = function(props) {
    return (<Cart user={user}/>);
  };
  const WrappedProfile = function(props) {
    return (<Profile _profile={user} setUser={setUser}/>);
  };

  return (
      <Router>
        <Route path="/" component={WrappedMain} exact={true}/>
        <Route path="/login" component={WrappedLogin} exact={true}/>
        <Route path="/cart" component={WrappedCart} exact={true}/>
        <Route path="/registration" component={Registration} exact={true}/>
        <Route path="/product" component={Product} exact={true} />  
        <Route path="/profile" component={WrappedProfile} exact={true} />
        <Route path="/order" component={Order} exact={true} />
      </Router>    
  );
}

export default App;
