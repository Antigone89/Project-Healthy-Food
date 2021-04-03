import React, { useContext, useState } from 'react';
import { AuthContext } from "../Context/AuthContext"



const Registration = () => {
    const { register } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const inputEmailHandler = (e) => {
        setEmail(e.target.value);
    };
    const inputPwdHandler = (e) => {
        setPassword(e.target.value);
    };
    const handleRegister = (e) => {
        e.preventDefault()
        register({ email, password })

    }


    const normalStyleLogin = { fontStyle: 'italic', color: "black", margin: '50px', textDecoration: 'none' }
    const activeStyleLogin = { fontStyle: 'italic', color: "white", backgroundColor: "#ff66ff", borderRadius: "8px", margin: '50px', padding: '10px', textDecoration: 'none' }

    return (
        <form>

            <div className="form">
                <div className="form-group">

                    <label htmlFor="email" style={normalStyleLogin}>Email</label>
                    <input type="text" name="email" placeholder="email" value={email} onChange={inputEmailHandler} style={normalStyleLogin}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password" style={normalStyleLogin}>Password</label>
                    <input type="password" name="password" placeholder="password" value={password} onChange={inputPwdHandler} style={normalStyleLogin}></input>
                </div>
                <div className="footer">
                    <button onClick={handleRegister} className="btn" style={activeStyleLogin}>Register</button>

                </div>
            </div>

        </form >
    )
}
export default Registration
