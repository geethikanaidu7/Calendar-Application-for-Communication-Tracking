import React from "react";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calendar Application</h1>
      </header>
      <main>
        <Calendar />
      </main>
    </div>
  );
}

export default App;
