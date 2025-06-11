import React,{ useState } from 'react'

const Content = () => {
  const [name,setName] = useState('Levin');
  const [count,setCount] = useState(0);


  const handleClick = () =>{
    setName("Chaac");
    console.log("You Clicked Here");
  }
  const handleClick2 = (name) =>{
    setCount(count+1);
    console.log(count); 
  }
  const handleClick3 = (e) =>{
    console.log(e);
    console.log(e.target);
  }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}
        </p>
        <button onClick={handleClick}>Change Name</button>
        <button onClick={()=> handleClick2('Varun')}>Click2</button>
        <button onClick={(e)=> handleClick3(e)}>Click2</button>
    </main>
  )
}

export default Content