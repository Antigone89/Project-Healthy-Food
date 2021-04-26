import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'
import React, { Component, useState, } from "react";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Searchbar from './Components/Searchbar';
import Registration from './Components/Registration';
import { AuthProvider } from './Context/AuthContext';
import RecipesList from './Components/RecipesList';
import { RecipesProvider } from './Context/RecipesContext';
import Home from './Components/Home';
import Header from './Components/Header';
import NewRecipe from './Components/NewRecipe';


import './App.css';



function App() {

  return (

    <BrowserRouter>
      <RecipesProvider>
        <AuthProvider>
          <div className="App">
            <Header />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}>
              </Route>
              <Route exact path="/searchbar" component={Searchbar}>
              </Route>
              <Route exact path="/Login" component={Login}>
              </Route>
              <Route exact path="/Registration" component={Registration} >
              </Route>
              <Route exact path="/Recipes" component={RecipesList}>
              </Route>
              <Route exact path="/NewRecipe" component={NewRecipe}>
              </Route>
            </Switch>


          </div>
        </AuthProvider>
      </RecipesProvider>
    </BrowserRouter>
  );
}



export default App;
