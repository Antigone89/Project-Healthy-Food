import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { Component, useState } from "react";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Registration from './Components/Registratoin';
import { AuthProvider } from './context/AuthContext';
import './App.css';


function App() {

  return (

    <BrowserRouter>
      <AuthProvider>
        <MusicProvider>

          <div className="App">
            <header className="App-header">
              <p>
                Healthy Food Project!!!
       
              </p>
            
              < Navbar />
              <Registration />
              <CreateAccount/>

              <Switch>
                <Route exact path="/searchbar" component={Searchbar}>
                </Route>
                <Route exact path="/login" component={Login}>
                </Route>
                <Route exact path="/registration" component={RegistrationScreen} >
                </Route>
                <Route exact path="/" component={AlbumList}>
                </Route>
              </Switch>
            </header>
          </div>
        </MusicProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
