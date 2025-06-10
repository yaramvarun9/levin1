import React from 'react'

const Content = () => {
  const changeName = () =>{
    return "Varun";
  }
  const handleClick = () =>{
    console.log("You Clicked Here");
  }
  const handleClick2 = (name) =>{
    console.log(`${name} Clicked`);
  }
  const handleClick3 = (e) =>{
    console.log(e);
    console.log(e.target);
  }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {changeName()}
        </p>
        <button onClick={handleClick}>Click</button>
        <button onClick={()=> handleClick2('Varun')}>Click2</button>
        <button onClick={(e)=> handleClick3(e)}>Click2</button>
    </main>
  )
}

export default Content