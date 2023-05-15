import React, { useState } from "react";

function DaySm(props) {
  const { date, month, onClick, active, data,onControlAdd } = props;
  const handleControlAdd = () => {
    onControlAdd(); 
  };
  return (
    <>
      <div className="p-1 position-relative  month-contain">
        <div className={`${month}`}></div>
        <div className={`wrap-sm ${active ? "active" : ""}`} onClick={onClick}>
          <div className="date">{date}</div>
          <div className="d-md-flex d-none justify-content-between">
            <div className="red">
              {!!data && data.map((i) =>
                i.color === "red" ? (
                  <input type="checkbox" className="todo-check" key={i.id} checked={i.status} readOnly/>
                ) : null
              )}
            </div>

            <div className="blue">
            {!!data && data.map((i) =>
                i.color === "blue" ? (
                  <input type="checkbox" className="todo-check" key={i.id} checked={i.status} readOnly/>
                ) : null
              )}
            </div>
            <div className="green">
            {!!data && data.map((i) =>
                i.color === "green" ? (
                  <input type="checkbox" className="todo-check" key={i.id} checked={i.status} readOnly/>
                ) : null
              )}
            </div>
            <div className="yellow">
            {!!data && data.map((i) =>
                i.color === "yellow" ? (
                  <input type="checkbox" className="todo-check" key={i.id} checked={i.status} readOnly/>
                ) : null
              )}
            </div>
          </div>
          {props.children && (
        <div>
          {React.cloneElement(props.children, {
            onAdd: handleControlAdd // 傳遞回調函式
          })}
        </div>
      )}
        </div>
      </div>
    </>
  );
}

export default DaySm;
