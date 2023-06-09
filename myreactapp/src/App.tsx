import React, { useEffect, useState } from "react";
import "./App.css";
import Customer from "./components/Customer";

function App() {

  const [title, setTitle] = useState("Practical React Enterprise");
  
  const handleAlert = () => {
    alert("I'm a button!");
  };

  useEffect(() => {
    setTitle("Updating the React Enterprise using useEffect");
  }, [title]);

  
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
