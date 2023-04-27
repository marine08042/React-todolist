import React from 'react'
import Day from './Day'

function Weekend() {
  const currentDate = new Date();
  currentDate.setDate(1);
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();//30
  const firstDayOfMonth = currentDate.getDay(); //6
  
  return (
    <>
    <div className="container">
      <div className='d-flex justify-content-between'>
        <div className='weekend-btn'>&lt;上一週</div>
        <div className='weekend-btn'>下一週&gt;</div>
      </div>
      <div className="d-flex justify-content-between">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
    </>
  )
}

export default Weekend