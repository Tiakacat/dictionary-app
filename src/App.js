import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello, Dictionary!</header>
        <main>
          <Dictionary />
        </main>
        <footer />
      </div>
    </div>
  );
}
