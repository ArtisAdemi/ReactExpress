import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((res) => {
            if (res.data.error){
                alert(res.data.error);
                return;
            }
            sessionStorage.setItem("token", res.data);
            navigate("/");
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
