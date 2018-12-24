import React, { Component} from "react";
import "./App.css";
import HomeComponent from './Home.jsx';

class App extends Component{
  componentDidMount(){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log(document.location.hostname);
  }
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