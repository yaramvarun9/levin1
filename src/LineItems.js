import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";


const LineItems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' >
              <input
                type='checkbox'
                checked={item.checked}
                onChange={()=>handleCheck(item.id)}
                />
              <label>{item.item}</label>
              <FaRegTrashCan
                onClick={()=>handleDelete(item.id)} 
                role="button" 
                tabIndex="0" 
              />
            </li>
  )
}

export default LineItems