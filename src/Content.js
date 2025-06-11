import React,{ useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

const Content = () => {
  const [items,setItems] = useState([{
    "id": 1,
    "checked": false,
    "item": "Learn React Hooks"
  },
  {
    "id": 2,
    "checked": true,
    "item": "Build a To-Do App"
  },
  {
    "id": 3,
    "checked": false,
    "item": "Review API Integration"
  }]);

  const handleCheck = (id) =>{
    console.log(`Key ${id}`);
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item )
    console.log(listItems);
    setItems(listItems);
    localStorage.setItem('shopping item',JSON.stringify(listItems));
  }
  const handleDelete = (id) =>{
    console.log(`Delete ${id}`)
    const listItems = items.filter(item => item.id != id);
    setItems(listItems);
    localStorage.setItem('shopping item',JSON.stringify(listItems));
  }

  return (
    <main>
      {items.length ?
        (<ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
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
          ))}
        </ul>)
      : (<p>Your List Empty</p>)
      }

    </main>
  )
}

export default Content