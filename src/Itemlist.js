import React from 'react'
import LineItems from './LineItems'
const Itemlist = ({items,handleCheck,handleDelete}) => {
  return (
          (<ul>
          {items.map((item) => (
            <LineItems key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
          ))}
        </ul>)
  )
}

export default Itemlist