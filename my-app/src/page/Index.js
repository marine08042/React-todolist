import React from "react";
import { Link } from "react-router-dom";
import Login from "../component/Login";
import '../component/css/todo.css'

function Index() {
  return (
    <>
      {/* <img src={require("../img/banner1.jpeg")} alt="" className="w-100 banner"/> */}
      <div className="banner d-flex flex-column justify-content-center align-items-center">
        <div className="banner-title">What do you want TODO?</div>
      </div>
    </>
  );
}

export default Index;
