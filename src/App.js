import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider"
import { auth } from "./Firebase"

function App() {
  const [{basket}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser.email, "authUser")
      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser.email,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Router>
      <div>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
} 

export default App;
