import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Todonav() {
    const [isMonth, setIsMonth] = useState(false);

    function toggleshow() {
        setIsMonth(!isMonth);
    }
  return (
    <>
    <div className="container d-flex align-items-end justify-content-between mb-4">
        <div className="d-flex align-items-baseline t-primary">
            <h6 className='mx-1 t-gray'>3月</h6>
            <h1 className='mx-1'>4<span className='fs-5'>月</span></h1>
            <h6 className='mx-1 t-gray'>5月</h6>
        </div>
        <div>
            <button className='t-btn' onClick={toggleshow}>{isMonth ? "以月份顯示" : "以週顯示"}</button>
            <Link to='/add'><button className='ms-3 t-btn'>新增</button></Link>
        </div>
        
    </div>
        
    </>
  )
}

export default Todonav