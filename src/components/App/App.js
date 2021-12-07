import React from "react";
import './_app.scss'
import Header from "../Header/Header";
import Router from "../../routes";

import { Route, Switch, Redirect } from 'react-router-dom'
import useGaTracker from '../useGaTracker'

function App() {
	
  useGaTracker();
  
  return (
    <div className="App">
      <Header/>
      <Router />
    </div>
  );
}

export default App;
