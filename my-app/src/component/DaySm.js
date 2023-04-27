import React from 'react'

function DaySm(props) {
  return (
    <>
        <div className="p-1 position-relative">
            <div className={`${props.month}`}></div>
            <div className="wrap-sm">
                <div className="date">{props.date}</div>
                <div className="d-md-flex d-none justify-content-between">
                    <div className="red">
                        <input type="checkbox" className='todo-check'/>
                        <input type="checkbox" className='todo-check'/>
                    </div>
                    <div className="blue">
                        <input type="checkbox" className='todo-check'/>
                        <input type="checkbox" className='todo-check'/>
                        <input type="checkbox" className='todo-check'/>
                    </div>
                        <div className="green">
                        <input type="checkbox" className='todo-check'/>
                    </div>
                    <div className="yellow">
                        <input type="checkbox" className='todo-check'/>
                        <input type="checkbox" className='todo-check'/>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default DaySm