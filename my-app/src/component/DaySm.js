import React from 'react'

function DaySm(props) {
    const { date, month, onClick,active } = props;
  return (
    <>
        <div className='p-1 position-relative  month-contain' >
            <div className={`${month}`}></div>
            <div className={`wrap-sm ${active?'active':''}`} onClick={onClick}>
                <div className="date">{date}</div>
                <div className="d-md-flex d-none justify-content-between">
                    <div className="red">
                        <input type="checkbox" className='todo-check'/>
                    </div>
                    <div className="blue">
                        <input type="checkbox" className='todo-check'/>
                    </div>
                        <div className="green">
                        <input type="checkbox" className='todo-check'/>
                        <input type="checkbox" className='todo-check'/>
                        <input type="checkbox" className='todo-check'/>
                        <input type="checkbox" className='todo-check'/>
                    </div>
                    <div className="yellow">
                        <input type="checkbox" className='todo-check'/>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default DaySm