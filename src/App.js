import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
function App() {
  return (
      <Router>
          <div className="App">
            <Switch>
                <Route path="/checkout">
                    <Header/>
                    <Checkout/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/">
                    <Header/>
                    <Home/>
                </Route>
            </Switch>
          </div>
      </Router>
  );
}

export default App;
