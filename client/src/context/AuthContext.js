import React, { createContext, useState, useEffect } from 'react'
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

    useEffect(() => {
        getUser()
    }, [])


    const register = ({ email, password }) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/users/register", requestOptions)
            .then(response => {
                const data = response.json()
                return data
            })
            .then(result => {
                console.log(result)
                if (result.success == true) {
                    setUser(result.user)

                }
            })
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
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    localStorage.setItem("token", result.token)
                    setUser(result.user)

                }
            })

            .catch(error => console.log('error', error));

    }
    const getUser = async () => {

        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);


        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:5000/users/token", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setUser(result)


            })

            .catch(error => console.log('error', error));

    }



    const addToFavorite = (favorite) => {



        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("recipeId", favorite);

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };


        fetch('http://localhost:5000/users/like', requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)

            })

    }





    const logout = () => {
        setUser(null)
    }

    console.log(user)
    return (

        <AuthContext.Provider value={{ user, login, register, addToFavorite, isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

