import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../utils/firebase";
import "firebase/auth";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // TODO 彈出視窗
        alert("註冊成功");
        navigate('/')
      })
      .catch(function (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorMsg("信箱已存在");
            break;
          case "auth/invalid-email":
            setErrorMsg("信箱格式不正確");
            break;
          case "auth/weak-password":
            setErrorMsg("密碼長度不足六碼");
            break;
          default:
        }
      });
  }
  return (
    <>
    <section className="d-flex flex-column align-items-center">
    <h3 className="mt-5">註冊帳號</h3>
    <form className="w-50 px-4 py-5 register mt-3" onSubmit={onSubmit}>
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
            
        </div>
        {errorMsg && <div className="alert alert-danger mt-4 py-2" role="alert">{errorMsg}</div>}
        <button type="submit" className="btn btn-outline-primary">
          註冊
        </button>
      </form>
    </section>
      
    </>
  );
}

export default Register;
