import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import firebase from '../utils/firebase'

function Navbar() {
  const [user,setUser]=useState(null)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((currentUser)=>{
      setUser(currentUser)
    })
  },[])
  return (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary">
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
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 d-flex justify-content-between">
            {user ? (<>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  todolist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/User">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  onClick={()=>firebase.auth().signOut()}>
                  登出
                </Link>
              </li>
            </>):(
              <li className="nav-item">
                <Link className="nav-link"to="/Signin">
                  登入/註冊
                </Link>
              </li>
            )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
