import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from './screens/main/main';
import Login from './screens/login/login';

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
