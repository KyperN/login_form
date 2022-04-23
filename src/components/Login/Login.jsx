import React from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    userName: '',
    password: '',
  });

  const registeredUsers = useSelector((state) => state.users.users);

  const userNameHandle = (e) => {
    setCredentials((prev) => ({
      ...prev,
      userName: e.target.value,
    }));
  };

  const passwordHandle = (e) => {
    setCredentials((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };
  const validateCredentials = () => {
    return registeredUsers.some(
      (user) =>
        user.userName === credentials.userName &&
        user.password === credentials.password
    );
  };
  console.log(validateCredentials());
  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: credentials });
  };
  return (
    <div className="input-block">
      <input
        onChange={(e) => {
          userNameHandle(e);
        }}
        placeholder="Username"
        type="text"
      />
      <input
        onChange={(e) => {
          passwordHandle(e);
        }}
        placeholder="Password"
        type="password"
      />
      <Link to="/home">
        <button onClick={handleLogin} disabled={!validateCredentials()}>
          Login
        </button>
      </Link>

      <Link to="/registration">
        <button>Register</button>
      </Link>
    </div>
  );
}
