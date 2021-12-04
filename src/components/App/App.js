import React from "react";
import './_app.scss'
import Header from "../Header/Header";
import Router from "../../routes";
import ReactGA from 'react-ga';

const TRACKING_ID = "G-19RJ7PX9CX";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Header/>
      <Router />
    </div>
  );
}

export default App;
