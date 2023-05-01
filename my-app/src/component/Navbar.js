import React,{useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom"
import firebase from '../utils/firebase'

function Navbar() {
  const [user,setUser]=useState(null)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((currentUser)=>{
      setUser(currentUser)
    })
  },[])
  const navigate = useNavigate();
  function signOut(){
    firebase.auth().signOut().then(() => {
      navigate("/");
      console.log('logout');
  }).catch((error) => {
      console.log(error);
  });
  }
  return (
    <>
    <div className="container-fluid navbar-color">
    <nav className="navbar navbar-expand bg-body-tertiary mb-5 container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TODO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            
            {user ? (<>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0 d-flex justify-content-between">
              <li className="nav-item">
                <Link className="nav-link" to="/todolist">
                  todolist
                </Link>
              </li>
              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0 d-flex justify-content-end">
              <li className="nav-item">
                <Link className="nav-link"  onClick={signOut}>
                  登出
                </Link>
              </li>
              </ul>
            </>):(
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0 d-flex justify-content-end">
              <li className="nav-item">
                <Link className="nav-link"to="/Signin">
                  登入
                </Link>
              </li>
              </ul>
            )}
            
          </div>
        </div>
      </nav>
    </div>
      
    </>
  );
}

export default Navbar;
