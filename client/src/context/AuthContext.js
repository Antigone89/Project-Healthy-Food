import React, { createContext, useState } from 'react'
import { useHistory } from "react-router-dom";

// 2 create config.js, import and gitignore
import firebase from "../fbConfig"

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
    const db = firebase.firestore();



    const register = ({ email, password }) => {
        //register user with email and pwd
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log('user', user)

                setUser(user)
                setIsAuthenticated(true)
                // Add a new document in collection "users"


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('error creating user :>> ', errorMessage);

            });
        //create user entry in db to store more data, ie name & favorites

    }

    const login = async ({ email, password }) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('user', user)
                setUser(user)
                setIsAuthenticated(true)


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('errorMessage', errorMessage)
            });
        //use login function to get the user and sve it in store
    }



    const addToFavorite = (favorite) => {
        //get current user
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                //save in db new favorite
                const userRef = db.collection("users").doc(user.uid);

                // Add a favorite to arrray
                return userRef.update({
                    favorites: firebase.firestore.FieldValue.arrayUnion(favorite)
                })
                    .then(function () {
                        console.log("Document successfully updated!");
                    })
                    .catch(function (error) {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            } else {
                history.push('/login')
            }
        });

    }

    const logout = () => {
        firebase.auth().signOut().then(() => {
            setUser(null)
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }

    return (
        <AuthContext.Provider value={{ user, login, register, addToFavorite, isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    )

}