import React from 'react'
import Control from './Control'

function Day() {
  return (
    <>
        <div className='mx-2 flex-grow-1 d-flex flex-column justify-content-between'>
          <div>
          <div className="title t-primary">
                24<span className='fs-6 ms-1'>/星期一</span>
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