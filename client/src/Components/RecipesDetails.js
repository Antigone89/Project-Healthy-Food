import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const item = {
    width: "100%"
}

const divStyle = {
    color: 'blue',
    padding: '10px',
    listStyle: 'none',
};

const liStyle = {

}



function RecipesDetails(data) {
    const recipe = data.recipe;


    return (
        <div>

            <h3>{recipe.title}</h3>
            <h4>{recipe.duration}</h4>
            <ul style={divStyle} >{recipe.ingredients.map((ingredient) => <li style={liStyle}>{ingredient}</li>)}</ul>



        </div>
    )
}

export default RecipesDetails
