import React, { useContext, useState } from 'react'
import RecipesDetails from "./RecipesDetails"


const Searchbar = () => {


    const [input, setInput] = useState("")
    const [err, setErr] = useState("")
    const [filteredRecipes, setFilteredRecipes] = useState([])

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSearch = () => {
        setErr("")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

        var urlencoded = new URLSearchParams();
        urlencoded.append("searchInput", input);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch("http://localhost:5000/recipes/search", requestOptions)
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

export default Searchbar
