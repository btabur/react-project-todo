import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'


const Header = () => {
 

   
    const dispatch= useDispatch()

    const handleAdd=(event) => {
        event.preventDefault();

        const newTodo= {
            id: v4(),
            text:event.target[0].value,
            isDone:false
        }
         dispatch({
        type:"ADD_TODO",
        payload:newTodo
             }); 
        
             event.target[0].value ='';
    }

   

  return (
    <header className="header">
    <h1>todos</h1>
    <form onSubmit={handleAdd}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  </header>
  )
}

export default Header
