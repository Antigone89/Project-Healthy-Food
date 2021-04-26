import React, { useContext, useState } from 'react';
import { AuthContext } from "../Context/AuthContext"
import spices from '../spices.jpg'


const Login = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const normalStyleLogin = { fontStyle: 'italic', color: "black", margin: '50px', textDecoration: 'none' }
    const activeStyleLogin = { fontStyle: 'italic', color: "white", backgroundColor: "#ff66ff", borderRadius: "8px", margin: '50px', padding: '10px', textDecoration: 'none' }
    const inputEmailHandler = (e) => {
        setEmail(e.target.value);
    };
    const inputPwdHandler = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = (e) => {
        e.preventDefault()
        login({ email, password })

    }

    return (

        <form>
            <div className="form">
                <div className="form-group">

                    < div style={{ backgroundImage: `url(${spices})`, margin: "10px" }}>
                        .<br>
                        </br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div >
                    <div>
                        <h2 style={normalStyleLogin}>Log in</h2></div>
                    <label htmlFor="email" style={normalStyleLogin}>Email:</label>
                    <input type="text" name="email" placeholder="email" value={email} onChange={inputEmailHandler} style={normalStyleLogin}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password" style={normalStyleLogin}>Password</label>
                    <input type="password" name="password" placeholder="password" value={password} onChange={inputPwdHandler} style={normalStyleLogin}></input>
                </div>
                <div className="footer">
                    <button onClick={handleLogin} className="btn" style={activeStyleLogin}>Login</button>

                </div>
            </div>

        </form >
    )
}
export default Login