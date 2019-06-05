import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Login from "./Components/Login";
import Cards from "./Components/Cards";
import CardDetails from "./Components/CardDetails";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/card/:id" component={CardDetails} />
        <Route exact path="/header" component={Header} />
      </div>
    </Router>
  );
}

export default App;
