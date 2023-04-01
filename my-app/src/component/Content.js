import React from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';

function Content(props) {
  const {list}=props
  return (
    <>
    <ul className='d-flex  flex-column align-items-start'>
      {list && list.map((item) =>(<Item key = {item.id} value = {item.value}/>))}
    </ul>
    </>
  )
}

export default Content