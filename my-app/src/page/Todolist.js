import React,{useState,useEffect} from 'react'
import Month from '../component/Month'
import Weekend from '../component/Weekend'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { BsCaretLeftFill,BsCaretRightFill  } from 'react-icons/bs';


function Todolist() {
  const [isMonth, setIsMonth] = useState(false);

    function toggleshow() {
        setIsMonth(!isMonth);
    }

  const [date, setDate] = useState(moment());
  const [month,setMonth]=useState(moment().month()+1);
  const [year,setYear]=useState(moment().year())

  const prevMonth = () => {
    setDate(moment(date).subtract(1, 'month'));
    setMonth(month - 1);
    if(month<2){
      setMonth(12);
      setYear(year-1)
    }else{
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    setDate(moment(date).add(1, 'month'));
    if(month>11){
      setMonth(1);
      setYear(year+1)
    }else{
      setMonth(month + 1);
    }
  };
  
  return (
    <>
        <div className="container d-flex align-items-end justify-content-between mb-4">
        <div className="d-flex align-items-baseline t-primary">
            <div className='mx-1 t-gray' onClick={prevMonth}><BsCaretLeftFill /></div>
            <h5 className='mx-1'>{year}<span className='fs-1 ms-2'>{month}</span>月</h5>
            <div className='mx-1 t-gray' onClick={nextMonth}><BsCaretRightFill/></div>
        </div>
        <div>
            <button className='t-btn' onClick={toggleshow}>{isMonth ? "以月份顯示" : "以週顯示"}</button>
        </div>
        
    </div>
    <div className="mb-5">
      {isMonth ? <Weekend />: <Month date={date} setDate={setDate}/> }
    </div>
    
    </>
  )
}

export default Todolist