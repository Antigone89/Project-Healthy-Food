import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { Component, useState } from "react";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Registration from './Components/Registration';
/*import Searchbar from './Components/Searchbar'*/
import { AuthProvider } from './Context/AuthContext';

import './App.css';


function App() {

  return (

    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <p>Healthy Food Project!!!  </p>

            <Navbar />
            <Switch>
              {/* <Route exact path="/searchbar" component={Searchbar}> */}
              {/* </Route> */}
              <Route exact path="/Login" component={Login}>
              </Route>
              <Route exact path="/Registration" component={Registration} >
              </Route>
            </Switch>
          </header>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
