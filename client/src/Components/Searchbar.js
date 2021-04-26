import React, { useContext, useState } from 'react'
import RecipesDetails from "./RecipesDetails"
import spices from '../spices.jpg'




const Searchbar = () => {

    const normalStyle = { flexBox: 'flex', textAlign: 'center', color: "black", margin: '50px', padding: '50px', textDecoration: 'none', fontStyle: 'italic' }
    const activeStyleSearch = { fontStyle: 'italic', color: "white", backgroundColor: "#ff66ff", borderRadius: "8px", margin: '50px', padding: '10px', textDecoration: 'none' }

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
        <div className="Searchbar " style={normalStyle}>
            < div style={{ backgroundImage: `url(${spices})`, margin: "10px" }}>
                <br>
                </br>
                <br></br>
                <br></br>
                <br></br>
            </div >
            <input onChange={handleChange} type="text" placeholder="Search..." value={input} />
            <button onClick={handleSearch} style={activeStyleSearch}>Search</button>
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
