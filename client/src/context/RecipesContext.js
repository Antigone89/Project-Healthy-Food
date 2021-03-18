import React, { createContext, useState } from 'react'
import { useHistory } from "react-router-dom";

import React, { useState, createContext, useEffect } from 'react';

export const RecipesContext = createContext();


export const RecipesProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([]);


    var requestOptions = {
        method: 'GET';



        useEffect() => {
    fetch('http://localhost:5000/recipes', requestOptions)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data.results)
            setRecipes(data.results)
        })
}

return (
    <RecipesContext.Provider value={{ recipes }}>
        {children}
    </RecipesContext.Provider>
)



}