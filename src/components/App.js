import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[show, setShow] = useState('')
  return (
    <div id="main">
     <button> id="click" onClick={()=> setShow("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")} </button>
    <p id="para">{show}</p>
    </div> 
  );
}


export default App;
