import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card } from 'react-bootstrap';
import Likebutton from './Likebutton'
import { AuthContext } from '../Context/AuthContext'



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
    console.log(recipe)
    const { user, addToFavorite, removeFavorite } = useContext(AuthContext)
    console.log(user)
    const handleLike = () => {
        addToFavorite(recipe._id)
    }
    const handleUnlike = () => {
        removeFavorite(recipe._id)
    }

    return (
        <div style={divStyle} >

            <h3>Recipe: {recipe.title}</h3>
            <h4>Duration in h: {recipe.duration}</h4>
            <ul style={divStyle} >Ingredients: {recipe.ingredients.map((ingredient) => <li style={liStyle}>{ingredient}</li>)}</ul>
            <p> Description: {recipe.description}</p>
            {  user && <div>
                {user.likedRecipes.includes(recipe._id) ? <button onClick={handleUnlike} >Unlike</button> : <button onClick={handleLike} >Like</button>}

            </div>}
            <p>{recipe.likes.length}</p>


            {/* <button>Likes: {this.state.likes} </button> */}



        </div>
    )
}

export default RecipesDetails
