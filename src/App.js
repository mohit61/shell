import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Login from "./Components/Login";
import Cards from "./Components/Cards";
import CardDetails from "./Components/CardDetails";

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/card/:id" component={CardDetails} />
      </div>
    </Router>
  );
}

export default App;
