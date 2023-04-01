import React from 'react'

function Item(props) {
    const {value}=props
  return (
    <>
      <li>{value}</li>
    </>
  )
}

export default Item