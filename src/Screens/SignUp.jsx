import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/SingUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // Lógica de registro simulada
    if (username && password) {
      setMessage('Registro exitoso');
    } else {
      setMessage('Por favor, completa todos los campos');
    }
  };

  const handleCustomPathClick = () => {
      navigate('/login'); // Redirige a la página de inicio de sesión
  };

  return (
    <div className="login-containerT">
      <div className="leftT">
        {/* Agrega aquí cualquier contenido adicional para el lado izquierdo */}
      </div>

      <div className="rightT">
        <button className='CambioT' onClick={handleCustomPathClick}>Iniciar Sesión</button>

        <div className="form-containerT">
          <h1>Registrarse</h1>
          <form onSubmit={handleSignUp}>
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
            <button type="submit">Registrarse</button>
          </form>
        </div>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
