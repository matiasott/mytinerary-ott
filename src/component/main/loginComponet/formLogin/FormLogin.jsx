import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { signIn } from '../../../../services/userService.js';
import { GoogleLogin } from '@react-oauth/google';
import { cargarUsuario } from '../../../../redux/actions/userActions.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import "./FormLogin.css";

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState(null);

  const usuariosRegistrados = useSelector((state) => state.usuarios);

  const navigate = useNavigate();


  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = { email, password };
      const response = await signIn(formData);

      if (response && response.token) {

        localStorage.setItem('token', response.token);
        setToken(response.token);
        dispatch(cargarUsuario(response.userData));
        return navigate('/');
      } else {
        setError('Incorrect credentials');
      }
    } catch (error) {
      console.error(error);
      setError('Error in login request');
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      // Decodificar la información del usuario desde el token de Google
      const userInfo = jwtDecode(credentialResponse.credential);
      navigate('/');

    } catch (error) {
      console.error('Error al procesar el inicio de sesión de Google:', error);
    }
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <form onSubmit={handleLogin}>
            {/* Email field */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password field */}
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn btn-primary btn-block botonInicio">
              Log in
            </button>

            <div style={{ margin: '10px 0' }}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const userInfo = jwtDecode(credentialResponse.credential);
                  console.log(userInfo)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
