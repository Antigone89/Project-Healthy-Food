import RecipesDetails from "./RecipesDetails"
import React, { useState, useEffect, useContext } from 'react'
import { RecipesContext } from '../Context/RecipesContext'


const normalStyle = { flexBox: 'flex', textAlign: 'center', color: "black", margin: '50px', padding: '50px', textDecoration: 'none', fontStyle: 'italic' }


const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
const RecipesList = () => {
    const { recipes, getRecipes } = useContext(RecipesContext)
    useEffect(() => {
        getRecipes()

    }, [])
    console.log('recipes', recipes)




    return (
        <div>
            <div style={normalStyle}>
                <h1>Recipes</h1>
                {recipes && recipes.map(recipe => {
                    return (
                        <RecipesDetails key={recipe.id} recipe={recipe} />
                        /* <p>{recipe.title}</p> */
                    )
                })}
            </div>
        </div>
    )
}

export default RecipesList