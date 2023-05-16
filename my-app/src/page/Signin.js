import React from "react";
import { Link } from "react-router-dom";
import Login from "../component/Login";
import "../component/css/todo.css";

function Signin() {
  return (
    <>
      <section className="d-flex mx-0 mx-sm-5 mt-5 align-items-center flex-column flex-sm-row">
        <div className="text-center w-50 d-flex flex-column justify-content-center ">
          <h1 className="text-primary mb-4">Welcome TODO!</h1>
          <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
            <h6 className="mb-3 mb-sm-0">還沒註冊？</h6>
            <Link to="/register">
              <button
                type="button"
                className="btn btn-outline-primary h-100 ms-3"
              >
                前往註冊
              </button>
            </Link>
          </div>
        </div>
        <Login />
      </section>
    </>
  );
}

export default Signin;
