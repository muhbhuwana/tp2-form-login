import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';


function App() {

  const [showModal, setShowModal] = useState(false);
  function onChangeClick(value) {
    setShowModal(true);
    console.log(showModal);
  }

  return (
    
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
