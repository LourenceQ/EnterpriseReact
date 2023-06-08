import React from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  return (
    <div className="App">
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
