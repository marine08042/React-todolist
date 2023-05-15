import React, { useState } from "react";
import './css/todo.css'
import firebase from "../utils/firebase";
import "firebase/compat/firestore";

function Item(props) {
  const { value,color,status,id,onUpdate } = props;
  const [isChecked,setIsChecked]=useState(status)
  
  function handleChange(){
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    const docRef = firebase.firestore().collection('todolist').doc(id);
    docRef.update({
      status: newChecked,
    })
    .then(() => {
      console.log('Document updated successfully!');
      onUpdate();
    })
    .catch((error) => {
      console.error('Error updating document:', error);
    });
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
