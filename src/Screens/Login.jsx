// Screens/Login.jsx
import React, { useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    
    // Lógica de autenticación simulada
    if (username === 'admin' && password === 'password') {
      setMessage('Login exitoso');
    } else {
      setMessage('Nombre de usuario o contraseña incorrectos');
    }
  };

  const handleCustomPathClick = () => {
    navigate('/SignUp'); // Redirige a la página de inicio de sesión
};


  return (
    <div className="login-container">
      <div className="left"></div>
      <div className="right">
      <button className='Cambio' onClick={handleCustomPathClick}>Registrarse</button>

        <div className="form-container">
          <h1>Iniciar Sesion</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
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
