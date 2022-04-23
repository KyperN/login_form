import React from 'react';
import './registration.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Registration() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    userName: '',
    password: '',
  });

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleCredentials = (userName, password) => {
    dispatch({
      type: 'REGISTER',
      payload: { userName: userName, password: password },
    });
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="registration-block">
        <input
          onChange={(e) => {
            handleUserName(e);
          }}
          className="post-input"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => {
            handlePassword(e);
          }}
          className="post-input"
          type="text"
          placeholder="Password"
        />
        <Link to="/">
          <button onClick={() => handleCredentials(userName, password)}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
