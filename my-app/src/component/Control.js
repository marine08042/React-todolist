import React, { useState, useEffect } from "react";
import Content from "./Content";
import { v4 as uuidv4 } from "uuid";

function Control(props) {
  const [list, setList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [color,setColor]=useState('red')
  const colorName = `color-${uuidv4()}`;
  const{listData}=props
  console.log(list);

  useEffect(()=>{
    setList(listData);
  },[])

  const onAdd = (value) => {
    const newItem = { id: uuidv4(), value: value, color: color };
    const newArray = [...list, newItem];
    setList(newArray);
    setTodoValue("");
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
        <Content list={list} />
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
            onClick={() => onAdd(todoValue)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}


export default Control;
