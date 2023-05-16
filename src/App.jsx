import React from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Main from './screens/main/main';
import Login from './screens/login/login';
import Registration from './screens/registration/registration';
import Product from './screens/product/product';
import Cart from './screens/cart/cart';

const App = (props) => {
  return (
      <Router>
        <Route path="/" component={Main} exact={true}/>
        <Route path="/login" component={Login} exact={true}/>
        <Route path="/cart" component={Cart} exact={true}/>
        <Route path="/registration" component={Registration} exact={true}/>
        <Route path="/product" component={Product} exact={true} />  
      </Router>    
  );
}

export default App;
