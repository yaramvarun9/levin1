import React from 'react'

const Content = () => {
  const changeName = () =>{
    return "Varun";
  }

  return (
    <main>
        <p>
            Hello {changeName()}
        </p>

    </main>
  )
}

export default Content