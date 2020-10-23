import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";
function App() {
    const [,dispatch] = useStateValue();
    useEffect(()=>
    {
        auth.onAuthStateChanged(authUser =>
            {
                console.log('The user is: ',authUser);
                if (authUser)
                {
                    dispatch(
                        {
                            type: 'SET_USER',
                            user: authUser
                        })
                }
                else
                {
                    dispatch(
                        {
                            type: 'SET_USER',
                            user: null
                        })
                }
            })
    },[]) //Fires once only while loading
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
