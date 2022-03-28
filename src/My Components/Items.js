import React from 'react'
import { Item } from './Item';

export const Items = (props) => {

  let myStyle = {
    minHeight: '70vh',
    margin: '40px auto'
  }

  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'> Items List </h3>
      {props.items.length === 0 ? "No Item to display" :
        props.items.map((item) => {
          return (
            <>
              <Item item={item} key={item.sno} onDelete={props.onDelete} /><hr />
            </>
          )
        })
      }
    </div>
  )
}
