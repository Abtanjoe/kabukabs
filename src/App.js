import './App.css';
import React from "react";
import Nav from "./Nav";
import FirstPage from './FirstPage';
import SecondScreen from './SecondScreen';
import Values from './Values';
import Roadmap from './Roadmap';
import Form from './Form';
import Team from './Team';

function App() {
  return (
    <div className="App">
      <Nav 
      linkHome='Home' 
      linkAbout='About Us' 
      linkPartner='Partners' linkToken='Token&Rewards' />
      <FirstPage 
      text="e are a promising app ready to take your journey sky high." 
      signBtn="Sign up" 
      loginBtn="Login"
      
      />
      <SecondScreen />
      <Values />
      <Roadmap />
      <Team />
      <Form />
    </div>
  );
}

export default App;
