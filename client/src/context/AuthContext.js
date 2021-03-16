import React, { createContext, useState } from 'react'
import { useHistory } from "react-router-dom";


const initContext = {
    user: null,
    login: () => {
        throw new Error('login() not implemented')
    },
    register: () => {
        throw new Error('register() not implemented')
    },
    addToFavorite: () => {
        throw new Error('addToFavorite() not implemented')
    },
}

// 3 Login & Register components
//update router and wrap auth provider

export const AuthContext = createContext(initContext)



export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    let history = useHistory()




    const register = ({ email, password }) => {

    }

    const login = async ({ email, password }) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/users/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result.email) {
                    setUser(result)

                }
            })

            .catch(error => console.log('error', error));

    }



    const addToFavorite = (favorite) => {


    }

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{ user, login, register, addToFavorite, isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

