import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card } from 'react-bootstrap';


<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>


const item = {
    width: "100%"
}

const divStyle = {
    color: 'black',
    padding: '10px',
    listStyle: 'none',
    border: '10px',
};

const liStyle = {

}



function RecipesDetails(data) {
    const recipe = data.recipe;


    return (
        <div style={divStyle} >

            <h3>Recipe: {recipe.title}</h3>
            <h4>Duration in h: {recipe.duration}</h4>
            <ul style={divStyle} >Ingredients: {recipe.ingredients.map((ingredient) => <li style={liStyle}>{ingredient}</li>)}</ul>
            <p> Description: {recipe.comment}</p>



        </div>
    )
}

export default RecipesDetails
