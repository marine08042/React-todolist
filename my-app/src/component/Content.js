import React from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

function Content(props) {
  const { list,onUpdate } = props;
  return (
    <>
      <div className="d-flex text-decoration-none">
        <div>
          <ul className="d-flex  flex-column align-items-start list-unstyled">
          {list &&
              list.map((item) => (
                <Item key={item.id} value={item.value} color={item.color} status={item.status} id={item.id} onUpdate={onUpdate}/>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Content;
