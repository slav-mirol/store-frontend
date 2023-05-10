import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from './screens/main/main';
import Login from './screens/login/login';
import Registration from './screens/registration/registration';

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
