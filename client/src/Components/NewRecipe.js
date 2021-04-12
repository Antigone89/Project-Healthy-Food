import React, { useContext, useState } from 'react';
import { RecipesContext } from "../Context/RecipesContext"



const NewRecipe = () => {
    const { newRecipe } = useContext(RecipesContext)
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [duration, setDuration] = useState("")
    const [description, setDescription] =useState("")



    const inputTitleHandler = (e) => {
        setTitle(e.target.value);
    };
    const inputIngredientsHandler = (e) => {
        setIngredients(e.target.value);
    };
    const inputDurationHandler = (e) => {
        setDuration(e.target.value);
    }
    const inputDescriptionHandler = (e) => {
        setDescription(e.target.value);
    }
    const handleNewRecipe = (e) => {
        e.preventDefault()
        newRecipe({ title, ingredients, duration, description })

    }
    

    const normalStyleNewRecipe = { fontStyle: 'italic', color: "black", margin: '50px', textDecoration: 'none' }
    const activeStyleLogin = { fontStyle: 'italic', color: "white", backgroundColor: "#ff66ff", borderRadius: "8px", margin: '50px', padding: '10px', textDecoration: 'none' }
    const commentBoxStyle = { width: '40%', height: '100px', padding: '10px', backgroundColor: '#d0e2bc', border: '3px',  color: '#8ebf42'}
       
    return (
        <form>

            <div className="form">
                <div className="form-group">

                    <label htmlFor="title" style={normalStyleNewRecipe}>Title</label>
                    <input type="text" name="title" placeholder="title" value={title} onChange={inputTitleHandler} style={normalStyleNewRecipe}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients" style={normalStyleNewRecipe}>Ingredients</label>
                    <input type="ingredients" name="ingredients" placeholder="ingredients" value={ingredients} onChange={inputIngredientsHandler} style={normalStyleNewRecipe}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="duration" style={normalStyleNewRecipe}>Duration</label>
                    <input type="duration" name="duration" placeholder="duration" value={duration} onChange={inputDurationHandler} style={normalStyleNewRecipe}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description " style={normalStyleNewRecipe}>Description</label>
                    <textarea class="description" style={commentBoxStyle} onChange={inputDescriptionHandler}>Describe your recipe here.</textarea>
        
                       
                </div>


                <div className="footer">
                    <button onClick={handleNewRecipe} className="btn" style={activeStyleLogin}>New Recipe</button>

                </div>
            </div>

        </form >

        
        
    )
}
export default NewRecipe
























/*import React, { Component } from 'react';


export const NewRecipe = () => {
 class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            duration: duration,
            ingredients: [],
        };

        const inputTitleHandler = (e) => {
            setTitle(e.target.value);
        };
        const inputDurationHandler = (e) => {
            setDuration(e.target.value);
        };
        const handleIngredient = (e) => {
            setIngredients(e.target.value)
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            

            return (
                <div>
                    <form>

                        <div className="form">
                            <div className="form-group">

                                <label htmlFor="title" >Recipe Title:</label>
                                <input type="text" name="title" placeholder="title" value={title} onChange={inputEmailHandler}></input>
                            </div>
                            <div className="form-group">

                                <label htmlFor="duration" >Duration:</label>
                                <input type="text" name="title" placeholder="title" value={title} onChange={inputEmailHandler}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ingredients">Ingredients:</label>
                                <input type="ingredients" name="ingredients" placeholder="ingrediets" value={ingredients} onChange={inputPwdHandler}></input>

                                {this.state.items.map(
                                    (item, i) =>
                                        <p key={i}>{item.List_Group}: {item.Content}</p>
                                )}
                            </div>
                            <div className="footer">
                                <button onClick={handleSubmit} className="btn">Submit</button>

                            </div>
                        </div>

                    </form >
                </div>
            )
        }
    }
export default NewRecipe

            /*
            
            class NewRecipe extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        title: '',
                        duration: duration,
                        ingredients: [],
            
                    };
                    this.handleChange = this.handleChange.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this);
                }
            
                handleData = () => {
                    fetch('http://localhost:5000/recipes/new')
                        .then(response => response.json())
                        .then(data => this.setState({ items: data }));
                }
            
                handleChange(event) {
                    this.setState({ formvalue: event.target.value });
                }
            
                handleSubmit(event) {
                    alert('A list was submitted: ' + this.state.formvalue);
                    event.preventDefault();
                }
            
                componentDidMount() {
                    this.handleData();
                }
            
                render() {
                    var formStyle = {
                        marginTop: '20px'
                    };
                    */


                /*
        
                <div className="App">
                    <h1>Submit an Item</h1>
                    <form onSubmit={this.handleSubmit} style={formStyle}>
                        <label>
                            List Item:
                  <input type="text" value={this.state.formvalue} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <h1>Grocery List</h1>
                    {this.state.items.map(
                        (item, i) =>
                            <p key={i}>{item.List_Group}: {item.Content}</p>
                    )}
                    <div>
                    </div>
  /            </div>*/
      


/*


/*
import React, { useContext, useState } from 'react'


const NewRecipe = () => {


    const [input, setInput] = useState("")
    const [err, setErr] = useState("")


    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSearch = () => {
        setErr("")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

        var urlencoded = new URLSearchParams();
        urlencoded.append("searchInput", input);

        var responseOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch("http://localhost:5000/recipes/search", responseOptions)
            .then(response => {
                const data = response.json()
                return data
            })
            .then(result => {
                console.log(result)
                if (result.success) {
                    setFilteredRecipes(result.data)
                }
                else {
                    setErr(result.msg)
                }


            })
    }

    return (<div>
        <div className="Searchbar ">
            <input onChange={handleChange} type="text" placeholder="Search..." value={input} />
            <button onClick={handleSearch} >Search</button>
            <h3 style={{ color: "red" }}>{err}</h3>
            {filteredRecipes && filteredRecipes.map((recipe, index) => {
                return (
                    <RecipesDetails key={recipe.id} recipe={recipe} />
                )
            })}
        </div></div>
    )
}

export default NewRecipe
*/