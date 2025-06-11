import React,{ useState } from 'react'
import Header from './Header';
import SearchItem from './SearchItem';
import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';

function App() {

    const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
    const [newItem,setNewItem] = useState('');
    const [search,setSearch] = useState('');

    const setAndSaveItems = (listItems) =>{
      setItems(listItems);
      localStorage.setItem('shoppingList',JSON.stringify(listItems));
    }



    const addItem = (item) =>{
      const id = items.length ? items[items.length -1].id+1 : 1;
      const myNewItem = { id, checked: false, item };
      const listItems = [...items,myNewItem];
      console.log(listItems);
      setAndSaveItems(listItems);
    }

    const handleCheck = (id) =>{
      console.log(`Key ${id}`);
      const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item )
      console.log(listItems);
      setAndSaveItems(listItems);
    }
    const handleDelete = (id) =>{
      console.log(`Delete ${id}`)
      const listItems = items.filter(item => item.id !== id);
      setAndSaveItems(listItems);
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("Submit");
      if(!newItem) return;
      console.log("Submitsdsdf");
      addItem(newItem);
      setNewItem('')
    }

  return (
    <div className="App">
      <Header title="Grocery Store"  />
      <AddItems 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase())) }
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />


    </div>
  );
}

export default App;
