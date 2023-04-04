import React, { useState } from "react";
import './css/todo.css'

function Item(props) {
  const [isChecked,setIsChecked]=useState(false)
  const { value } = props;
  function handleChange(){
    setIsChecked(!isChecked)
  }
  function handleChecked(){
    console.log('已完成')
  }
  function handleUnchecked(){
    console.log('未完成')
  }
  return (
    <>
      <li>
        <input type="checkbox" checked={isChecked} onChange={handleChange}/> 
        {/* {isChecked ? handleChecked() : handleUnchecked()} */}
        <span className={`ms-2 ${isChecked ? "line" : ''}`}>{value}</span>
      </li>
    </>
  );
}

export default Item;
