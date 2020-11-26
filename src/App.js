import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div classname="App">
        <h1> Hello Again from home</h1>
      </div>
    );
  }
}

export default hot(module)(App);