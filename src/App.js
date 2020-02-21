import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import NavBar from './components/navbar';
import Home from './components/home';


import Map from './components/map';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/resume" component={Resume}/> */}
          <Route exact path="/about" component={About}/>
          <Route exact path = "/projects" component= {Projects}/>
          <Route exact path = "/contact" component = {Contact}/>
          <Route exact path="/map" component={Map}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;