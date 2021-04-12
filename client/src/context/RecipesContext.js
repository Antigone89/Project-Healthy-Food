import React, { createContext, useState, useEffect, } from 'react';
import NewRecipe from '../Components/NewRecipe';
export const RecipesContext = createContext();




export const RecipesProvider = ({ children }) => {

    const [recipes, setRecipes] = useState(null);





    const newRecipe = ({ title, ingredients, duration, description }) => {
        const ingredientArrey = ingredients.replace(" ", "").split(",");
        console.log(ingredientArrey);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

        var urlencoded = new URLSearchParams();
        urlencoded.append("title", title);
        ingredientArrey.forEach(ingredient => {
            urlencoded.append("ingredients", ingredient);

        });
        urlencoded.append("duration", duration);
        urlencoded.append("description", description);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/recipes/new", requestOptions)
            .then(response => {
                const data = response.json()
                return data
            })
            .then(result => {
                console.log(result)
                getRecipes()
                if (result.success == true) {


                }
            })

    }

    const getRecipes = () => {
        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders

        }


        fetch('http://localhost:5000/recipes/all', requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
                setRecipes(data)
            })

    }



    return (
        <RecipesContext.Provider value={{ recipes, newRecipe, getRecipes }}>
            {children}
        </RecipesContext.Provider>
    )

}