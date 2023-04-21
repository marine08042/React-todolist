import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../utils/firebase";
import "firebase/auth";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    console.log('submit');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch(function (error) {
        console.log('error');
      });
  }
  return (
    <>
      <form className="w-50 px-4 py-5 login" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            帳號
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            密碼
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="form-text"></div>
        </div>
        <button type="submit" className="btn btn-primary">
          註冊
        </button>
      </form>
    </>
  );
}

export default Register;
