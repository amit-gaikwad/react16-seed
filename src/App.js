import React, { Component} from "react";
import "./App.css";
import HomeComponent from './Home';

class App extends Component{
  render(){
    return(
      <div className="App">
       <HomeComponent /> 
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App; 