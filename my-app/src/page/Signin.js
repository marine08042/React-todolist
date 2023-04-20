import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../component/Login'

function Signin() {
  return (
    <>
        <div className="d-flex mx-5 mt-5">
        <div className="text-center w-50 d-flex flex-column justify-content-center">
          <h1 className="text-primary mb-4">Welcome TODO!</h1>
          <div className="d-flex justify-content-center align-items-center">
              <h6 className="m-0">還沒註冊？</h6>
              <Link to="/register">
              <button type="button" className="btn btn-outline-primary h-100 ms-3">
                前往註冊
              </button></Link>
          </div>
        </div>
        <Login />
      </div>
    </>
  )
}

export default Signin