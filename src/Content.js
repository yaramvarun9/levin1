import Itemlist from "./Itemlist";
const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <main>
      {items.length ?
         <Itemlist
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      
      />
      : (<p>Your List Empty</p>)
      }

   

    </main>
  )
}

export default Content