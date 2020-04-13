import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="form">
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </div>
    </Router>
  );
}

export default App;
