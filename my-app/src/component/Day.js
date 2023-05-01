import React from 'react'
import Control from './Control'

function Day(props) {
  const { date,dayOfWeek } = props;
  const formattedDate = date.format("DD");
  return (
    <>
        <div className='mx-2 flex-grow-1 d-flex flex-column justify-content-between'>
          <div>
          <div className="title t-primary">
                {formattedDate}<span className='fs-6 ms-1'>/{dayOfWeek}</span>
            </div>
            <div className="wrap t-primary">
                <Control/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Day