import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Main from './screens/main/main';
import Login from './screens/login/login';
import Registration from './screens/registration/registration';
import Product from './screens/product/product';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/product/:id" element={<Product id={id}/>} />
      </Routes>    
    </Router>
  );
}

export default App;
