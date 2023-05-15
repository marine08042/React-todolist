import React, { useState, useEffect } from "react";
import Content from "./Content";
import { v4 as uuidv4 } from "uuid";
import firebase from "../utils/firebase";
import "firebase/compat/firestore";

function Control(props) {
  const [list, setList] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [todoValue, setTodoValue] = useState("");
  const [color,setColor]=useState('red')
  const colorName = `color-${uuidv4()}`;
  const{listData,date,onAdd,onUpdate}=props
  const timestamp = firebase.firestore.Timestamp.fromDate(date.toDate());

  useEffect(()=>{
    setList(listData);
    const userState = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    return () => userState();
  },[])

  const handleAdd = (value) => {
    const newItem={ id: uuidv4(), value: value, color: color };
    
    firebase.firestore().collection("todolist").add({
      thing: value,
      user: userEmail,
      color:color,
      status:false,
      date:timestamp,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    const newArray = [...list, newItem];
    setList(newArray);
    setTodoValue("");
    onAdd();
  };
  
  const todoChange = (event) => {
    const value = event.target.value;
    setTodoValue(value);
  };

  const colorChange=(event)=>{
    setColor(event.target.value)
  }

  return (
    <>
      <div className="row d-flex justify-content-center mb-4">
        <Content list={list} onUpdate={onUpdate}/>
      </div>
      <div className="addTodo">
        <div className="mb-3 d-flex">
          <input
            type="text"
            value={todoValue}
            onChange={todoChange}
            className="form-control"
            name="title"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex ms-1">
            <input
              type="radio"
              name={colorName}
              className="radio-r"
              value="red"
              checked={color === "red"}
              onChange={colorChange}
            />
            <input
              type="radio"
              name={colorName}
              className="radio-b"
              value="blue"
              checked={color === "blue"}
              onChange={colorChange}
            />
            <input
              type="radio"
              name={colorName}
              className="radio-g"
              value="green"
              checked={color === "green"}
              onChange={colorChange}
            />
            <input
              type="radio"
              name={colorName}
              className="radio-y"
              value="yellow"
              checked={color === "yellow"}
              onChange={colorChange}
            />
          </div>

          <button
            className="btn submit"
            onClick={() => handleAdd(todoValue)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}


export default Control;
