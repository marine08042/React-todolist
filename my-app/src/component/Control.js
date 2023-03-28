import React,{useState,useEffect} from 'react'

function Control() {
  const [list,setList]=useState([])
  const onAdd=(value)=> {
    const newArray = [...list,value]
    setList(newArray)
  }
  return (
    <>
    <div className='d-flex justify-content-center mb-4'>
      <input type="text"/>
      <button className='ms-2' onClick={onAdd()}>提交</button>
    </div>
      
    </>
  )
}

export default Control