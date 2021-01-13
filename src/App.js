import React from "react";
import "./styles.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute
          exact
          path="/home"
          component={Home}
          isLoggedIn={props.isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/about"
          component={About}
          isLoggedIn={props.isLoggedIn}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => {
  //console.log("redux state", state);
  return {
    isLoggedIn: state.isLoggedIn
  };
};
export default connect(mapStateToProps)(App);
