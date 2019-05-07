import React from "react";
import "./App.css";
import Todo from "./components/todo";

function App() {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-4 offset-4">
          <Todo />
        </div>
      </div>
    </main>
  );
}

export default App;
