import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/Auth/LoginPage";
import SignupPage from "./components/Auth/SignupPage";

function App() {
  return (
    <div>
      <NavBar />
      <Route
        exact
        path="/signup"
        render={({ history }) => <SignupPage history={history} />}
      />
      <Route exact path="/login" render={() => <LoginPage />} />
    </div>
  );
}

export default App;
