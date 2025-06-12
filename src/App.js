import React,{ useState, useEffect } from 'react'
import Header from './Header';
import SearchItem from './SearchItem';
import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import apiRequest from './apiRequest';


function App() {

    const API_URL = "http://localhost:3500/items";
    const [items,setItems] = useState([]);
    const [newItem,setNewItem] = useState('');
    const [search,setSearch] = useState('');
    const [fetchError,setFetchError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
      console.log("Loading first time")
      const fetchItems = async () =>{
        try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error(" Did not recieved response");
        const listItems = await response.json();
        setItems(listItems);
        console.log(listItems);
        setFetchError(null);
        }catch(err){
          console.log("error "+err.message);
          setFetchError(err.message);
        }finally{
          setIsLoading(false);
        }

      }
      (async () => fetchItems())()
    },[])

    useEffect(()=>{
      console.log("items updated")
      localStorage.setItem('shoppingList',JSON.stringify(items));
    },[items])


    const addItem = (item) =>{
      const id = items.length ? items[items.length -1].id+1 : 1;
      const myNewItem = { id, checked: false, item };
      const listItems = [...items,myNewItem];
      console.log(listItems);
      setItems(listItems);
    }

    const handleCheck = (id) =>{
      console.log(`Key ${id}`);
      const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item )
      console.log(listItems);
      setItems(listItems);
    }
    const handleDelete = (id) =>{
      console.log(`Delete ${id}`)
      const listItems = items.filter(item => item.id !== id);
      setItems(listItems);
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
      <main>        
        { isLoading && <p>Loading Items</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />


    </div>
  );
}

export default App;
