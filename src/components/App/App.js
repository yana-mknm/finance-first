import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router />
    </div>
  );
}

export default App;
