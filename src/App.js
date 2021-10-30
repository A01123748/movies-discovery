import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import MovieDetails from "./components/MovieDetails.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/details/:movieId" component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
