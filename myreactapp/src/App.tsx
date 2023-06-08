import React, { useState } from "react";
import "./App.css";
import Customer from "./components/Customer";

function App() {
  const handleAlert = () => {
    alert("I'm a button!");
  };

  const [title, setTitle] = useState("Practical React Enterprise");
  return (
    <div className="App">
      <button
        style={{
          color: "#ffff",
          height: "5rem",
          width: "10rem",
          backgroundColor: "tomato",
          borderRadius: "5px",
          fontSize: "18px",
        }}
        onClick={handleAlert}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
