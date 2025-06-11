import React,{ useState } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

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
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shopping item',JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="Grocery Store"  />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />


    </div>
  );
}

export default App;
