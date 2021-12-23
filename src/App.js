
import "./App.css";
import React from "react";
import Home from "./component/Home/Home";

import Register from "./component/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Login from "./component/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Shipping from "./component/Shipping/Shipping";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import PlaceOrder from "./component/PlaceOrder/PlaceOrder";


function App() {
  return (
    <div className="App">
      
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
           
            <Route exact path="/login">
              <Login/>
            </Route>
            
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/shipping">
              <Shipping/>
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrder">
              <PlaceOrder/>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      
        </AuthProvider>

    </div>
  );
}

export default App;
