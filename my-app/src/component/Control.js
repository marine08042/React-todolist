import React,{useState,useEffect} from 'react'
import Content from './Content'
import { v4 as uuidv4 } from 'uuid';

function Control() {
  const [list,setList]=useState([])
  const [todoValue,setTodoValue]=useState('')
  // let todoValue = ''

  const onAdd=(value)=> {
    const newArray = [...list,todoValue]
    setList(newArray)
    setTodoValue('')
  }
  const handleChange=(event)=>{
    const value = event.target.value
    // console.log(value)
    setTodoValue(value)
  }
  useEffect(()=>{
    console.log(list)
  },[list])

  return (
    <>
    <div className='d-flex justify-content-center mb-4'>
      <input type="text" value={todoValue} onChange={handleChange}/>
      <button className='ms-2' onClick={onAdd}>提交</button>
    </div>
    <Content list={list.map(item => ({ id: uuidv4(), value: item }))} />
      
    </>
  )
}

export default Control