import React, { useState } from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  const [title, setTitle] = useState("Practical React Enterprise");
  return (
    <div className="App">
      <h1 style={{color: "blue", marginBottom: "5rem", }}>{title}</h1>
      <Customer 
        firstName = "Lourence"
        lastName = "Doe"
        age={21}
        isLegal={true}
      />
    </div>
  );
}

export default App;
