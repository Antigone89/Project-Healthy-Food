import React, { createContext, useState, useEffect, } from 'react';
export const RecipesContext = createContext();




export const RecipesProvider = ({ children }) => {

    const [recipes, setRecipes] = useState(null);


    var requestOptions = {
        method: 'GET'
    }



    useEffect(() => {
        fetch('http://localhost:5000/recipes/all', requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
                setRecipes(data)
            })


    }, [])

    return (
        <RecipesContext.Provider value={{ recipes }}>
            {children}
        </RecipesContext.Provider>
    )
}