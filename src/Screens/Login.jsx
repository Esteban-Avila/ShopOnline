// Screens/Login.jsx
import React, { useState } from 'react';
import '../StyleScreens/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Lógica de autenticación simulada
    if (username === 'admin' && password === 'password') {
      setMessage('Login exitoso');
    } else {
      setMessage('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="left"></div>
      <div className="right">
        <div className="form-container">
          <h1>Login Page</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
