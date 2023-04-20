import React, { useState, useEffect } from "react";
import Content from "./Content";
import { v4 as uuidv4 } from "uuid";

function Control() {
  const [list, setList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [detail,setDetail]=useState('')
  // let todoValue = ''

  const onAdd = (value) => {
    const newArray = [...list, todoValue];
    setList(newArray);
    setTodoValue("");
  };
  const todoChange = (event) => {
    const value = event.target.value;
    // console.log(value)
    setTodoValue(value);
  };
  const detailChange = (event) => {
    const value = event.target.value;
    // console.log(value)
    setDetail(value);
  };
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <>
    <div className="container w-75">
    <div className="row d-flex justify-content-center mb-4">
        <label htmlFor="title" className="form-label">
          標題
        </label>
        <div class="mb-3">
          <input
            type="text"
            value={todoValue}
            onChange={todoChange}
            className="form-control"
            name="title"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="title" className="form-label">
            詳細事項
          </label>
          <textarea class="form-control" rows="3" value={detail} onChange={detailChange}></textarea>
        </div>
        <div class="mb-3">
          <label htmlFor="title" className="form-label">
            完成日期
          </label>
          <input type="date" name="date" id="date" className="form-control" />
        </div>
        <button className="ms-2 btn btn-warning col-3" onClick={onAdd}>
          提交
        </button>
      </div>
    </div>
      
      <Content list={list.map((item) => ({ id: uuidv4(), value: item }))} />
    </>
  );
}

export default Control;
