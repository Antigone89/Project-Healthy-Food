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



    return (
        <form>

            <div className="form">
                <div className="form-group">

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email" value={email} onChange={inputEmailHandler}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" value={password} onChange={inputPwdHandler}></input>
                </div>
                <div className="footer">
                    <button onClick={handleRegister} className="btn">Register</button>

                </div>
            </div>

        </form >
    )
}
export default Registration
