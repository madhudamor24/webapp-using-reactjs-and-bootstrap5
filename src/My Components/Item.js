import React from 'react'

export const Item = ({item, onDelete}) => {
  return (
    <div>
        <h4>{item.item_name}</h4>
        <p>{item.price}</p>
        <button 
          className='btn btn-sm btn-danger' onClick={() =>{ onDelete(item) }}> Delete 
        </button>
    </div>
  )
}
