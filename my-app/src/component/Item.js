import React, { useState } from "react";
import './css/todo.css'

function Item(props) {
  const [isChecked,setIsChecked]=useState(false)
  const { value,color,thing } = props;
  function handleChange(){
    setIsChecked(!isChecked)
  }
  return (
    <>
      <li className="d-flex align-items-center">
        <div className={`${color}`}>
          <input type="checkbox" checked={isChecked} onChange={handleChange} className="todo-check"/> 
        </div>
        
        <span className={`ms-2 word-${color} ${isChecked ? `line-${color}` : ''}`}>{value}</span>
      </li>
    </>
  );
}

export default Item;
