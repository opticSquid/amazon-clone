import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
            <Switch>
                <Route path="/checkout">
                    <h1>Checkout</h1>
                </Route>
                <Route path="/login">
                    <h1>Login</h1>
                </Route>
                <Route path="/">
                    <h1>Home Page</h1>
                </Route>
            </Switch>
          </div>
      </Router>
  );
}

export default App;
