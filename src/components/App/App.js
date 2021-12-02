import React from "react";
import './_app.scss'
import Header from "../Header/Header";
import Router from "../../routes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router />
    </div>
  );
}

export default App;
