import React, { useContext } from "react";

import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Notfound from "./pages/Notfound";
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInputs, userInputs } from './FormSource';
import "./style/dark.scss"
import { DarkModeContext } from './context/darkModeContext';


function App() {
  
  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<Notfound/> } />
       
        <Route path="users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
        </Route>

        <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New inputs={productInputs} title="Add New Product"r/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
