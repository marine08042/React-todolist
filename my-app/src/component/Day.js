import React from 'react'
import Control from './Control'

function Day(props) {
  const { date,dayOfWeek,listData } = props;
  console.log(listData)
  const formattedDate = date.format("DD");
  return (
    <>
        <div className='mx-2 flex-grow-1 d-flex flex-column justify-content-between'>
            <div className="title t-primary">
                  {formattedDate}<span className='fs-6 ms-1'>/{dayOfWeek}</span>
              </div>
              <div className="wrap">
                  <Control listData = {listData} date={date}/>
              </div>
        </div>
    </>
  )
}

export default Day