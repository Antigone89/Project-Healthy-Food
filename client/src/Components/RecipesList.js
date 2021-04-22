import RecipesDetails from "./RecipesDetails"
import React, { useState, useEffect, useContext } from 'react'
import { RecipesContext } from '../Context/RecipesContext'
import { AuthContext } from '../Context/AuthContext'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card } from 'react-bootstrap';


<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>


const normalStyle = { flexBox: 'flex', textAlign: 'center', color: "black", margin: '50px', padding: '50px', textDecoration: 'none', fontStyle: 'italic' }


const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
const RecipesList = () => {
    const { recipes, getRecipes } = useContext(RecipesContext)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        getRecipes()

    }, [user])
    console.log('recipes', recipes)


    // < Card className = 'mb-3' style = {{ color: '#000', marginBottom: '15px', margin: '100px' }
    // }>
    {/* <Card.Img src='https://picsum.photos/100/50'></Card.Img> */ }
    {/* <Card.Body></Card.Body> */ }
    {/* <Card.Title></Card.Title> */ }
    {/* <Button>Test Button</Button> */ }
    {/* <Alert variant="success">This is a Button</Alert> */ }
    {/* <Breadcrumb.Item>Test1</Breadcrumb.Item> */ }
    {/* <Breadcrumb.Item>Test2</Breadcrumb.Item> */ }
    {/* <Breadcrumb.Item>Test3</Breadcrumb.Item> */ }
    {/* </Card > */ }


    return (

        <div style={normalStyle}>
            <Card className='mb-3' style={{ color: '#000', marginBottom: '15px', margin: '100px' }}>

                <Card.Title>Recipes</Card.Title>
                <Card.Body>
                    {recipes && recipes.reverse().map(recipe => {
                        return (
                            <RecipesDetails key={recipe.id} recipe={recipe} />
                            /* <p>{recipe.title}</p> */
                        )
                    })}

                </Card.Body>

                <Button>Test Button</Button>
                <Alert variant="success">This is a Button</Alert>
                <Breadcrumb.Item>Test1</Breadcrumb.Item>
                <Breadcrumb.Item>Test2</Breadcrumb.Item>
            </Card>
        </div>

    )
}

export default RecipesList