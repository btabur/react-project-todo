import React from "react";
import { useDispatch } from "react-redux";


const Card = ({todo}) => {
  const dispatch= useDispatch()

    const handleChange = () => {
      const updateTodo= {...todo,isDone:!todo.isDone}

    dispatch({
        type:"UPDATE_TODO",
        payload:updateTodo
             }); 

 

    }
    const handleDelete = ()=> {
      dispatch({
        type:"DELETE_TODO",
        payload:todo.id
      
             }); 
    }
  return (
    <li className={todo.isDone ? 'completed' : 'view'} >
      <div className="view">
        <input checked={todo.isDone} onChange={handleChange} className="toggle" type="checkbox" />
        <label>{todo.text}</label>
        <button onClick={handleDelete} className="destroy"></button>
      </div>
    </li>
  );
};

export default Card;
