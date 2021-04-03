
import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    useLocation
} from "react-router-dom";

//retrieve user from auth context and display his email
const activeStyle = { color: "white", backgroundColor: "#f1356d", borderRadius: "8px", margin: '20px', padding: '10px', textDecoration: 'none', fontStyle: 'italic' }
const normalStyle = { color: "black", margin: '30px', padding: '40px', textDecoration: 'none', fontStyle: 'italic' }
const Navigationbar = () => {
    const { user, logout } = useContext(AuthContext)
    let location = useLocation()
    console.log('location', location.pathname)

    console.log(user)



    const handleLogout = () => {
        logout()

    }

    return (
        <nav className="navbar">
            <div >
                <Link to="/" style={location.pathname == "/" ? activeStyle : normalStyle} >Home</Link>
                <Link to="/registration" style={location.pathname == "/registration" ? activeStyle : normalStyle}>Registration</Link>
                <Link to="/searchbar" style={location.pathname == "/searchbar" ? activeStyle : normalStyle}>Search</Link>
                <Link to="/recipes" style={location.pathname == "/recipes" ? activeStyle : normalStyle}>Recipes</Link>
                <Link to="/newRecipe" style={location.pathname == "/newrecipe" ? activeStyle : normalStyle}>Add New Recipe</Link>
                <Link to="/login" style={location.pathname == "/login" ? activeStyle : normalStyle}>Login</Link>
            </div>

            {user ?
                <div>
                    <p>{user.email}</p>
                    <button onClick={handleLogout} className="btn">Logout</button>
                </div>
                : <p>No user</p>}



        </nav>

    )
}

export default Navigationbar
