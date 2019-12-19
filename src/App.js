import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import NavBar from './components/navbar';
import Home from './components/home';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;