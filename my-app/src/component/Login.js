import React from "react";

function Login() {
  return (
    <>
      <form className="w-50 px-4 py-5 login">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            帳號
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div className="form-text">
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            密碼
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div className="form-text">
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          登入
        </button>
      </form>
    </>
  );
}

export default Login;
