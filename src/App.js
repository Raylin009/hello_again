import React, { Component} from "react";
import Todo from "./Components/todo/todo.js"
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello Again 11.26.2020</h1>
        <Todo />
      </div>
    );
  }
}

export default App;