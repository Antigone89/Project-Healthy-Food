
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    useLocation
} from "react-router-dom";
import spices from '../spices.jpg'


//retrieve user from auth context and display his email
// /* Mobile menu */ const menu = { display: 'flex', flexWrap: 'wrap', justifyContent: 'spaceBetween', alignItems: 'center', display: 'block' }
const activeStyle = { width: '100 %', color: "white", backgroundColor: "#f1356d", borderRadius: "8px", margin: '20px', padding: '10px', textDecoration: 'none', fontStyle: 'italic', fontWeight: 900, }
const normalStyle = { width: '100 %', color: "black", margin: '30px', padding: '40px', textDecoration: 'none', fontStyle: 'italic', fontWeight: 900, }
const flexActiveStyle = { display: 'flex', width: '100 %', flexDirection: 'column' }
const flexNormalStyle = { display: 'flex', width: '100 %', flexDirection: 'column' }

const Navigationbar = () => {
    const { user, logout } = useContext(AuthContext)
    let location = useLocation()
    const [isMobile, setIsMobile] = useState(false)
    console.log('location', location.pathname)
    useEffect(() => {
        if (window.innerWidth < 100) {
            setIsMobile(true)
        }
    }, [])
    console.log(user)



    const handleLogout = () => {
        logout()

    }
    console.log(window.innerWidth)

    return (
        isMobile ? (
            <nav className="navbar">
                <div >
                    <Link to="/" style={location.pathname == "/" ? activeStyle : normalStyle && flexActiveStyle} >Home</Link>
                    <Link to="/registration" style={location.pathname == "/registration" ? activeStyle : normalStyle && flexActiveStyle}>Registration</Link>
                    <Link to="/searchbar" style={location.pathname == "/searchbar" ? activeStyle : normalStyle && flexActiveStyle}>Search</Link>
                    <Link to="/recipes" style={location.pathname == "/recipes" ? activeStyle : normalStyle && flexActiveStyle}>Recipes</Link>
                    <Link to="/newRecipe" style={location.pathname == "/newRecipe" ? activeStyle : normalStyle && flexActiveStyle}>Add New Recipe</Link>
                    <Link to="/login" style={location.pathname == "/login" ? activeStyle : normalStyle && flexActiveStyle}>Login</Link>
                </div>

                {user ?
                    <div>
                        <p>{user.email}</p>
                        <button onClick={handleLogout} className="btn">Logout</button>
                    </div>
                    : <p>No user</p>}



            </nav>
        ) :
            (<nav className="navbar">
                <div >
                    <Link to="/" style={location.pathname == "/" ? activeStyle : normalStyle} >Home</Link>
                    <Link to="/registration" style={location.pathname == "/registration" ? activeStyle : normalStyle}>Registration</Link>
                    <Link to="/searchbar" style={location.pathname == "/searchbar" ? activeStyle : normalStyle}>Search</Link>
                    <Link to="/recipes" style={location.pathname == "/recipes" ? activeStyle : normalStyle}>Recipes</Link>
                    <Link to="/newRecipe" style={location.pathname == "/newRecipe" ? activeStyle : normalStyle}>Add New Recipe</Link>
                    <Link to="/login" style={location.pathname == "/login" ? activeStyle : normalStyle}>Login</Link>
                </div>

                {user ?
                    <div>
                        <p>{user.email}</p>
                        <button onClick={handleLogout} className="btn">Logout</button>
                    </div>
                    : <p>No user</p>}



            </nav>)

    )
}

export default Navigationbar
