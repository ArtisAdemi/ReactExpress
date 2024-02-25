import axios from 'axios';
import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((res) => {
            console.log(res.data);
        });
    };

    return (
        <div className="loginContainer">
        <label>Username:</label>
        <input
          type="text"
          onChange={handleUsernameChange}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={handlePasswordChange}
        />
  
        <button onClick={login}> Login </button>
      </div>
    );
}

export default Login;
