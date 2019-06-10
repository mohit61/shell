import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

//components
import Login from "./components/Login";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import Header from "./components/Header";
import FooterSite from "./components/Footer";
import SearchInput from "./components/SearchInput";
import InfoPanel from "./components/InfoPanel";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/card/:id" component={CardDetails} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/footer" component={FooterSite} />
          <Route exact path="/search" component={SearchInput} />
          <Route exact path="/infoPanel" component={InfoPanel} />
          <Route exact path="/sidebar" component={Sidebar} />
          <Route exact path="/home" component={Home} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
