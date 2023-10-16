import React from "react";
import { useDispatch } from "react-redux";


const Card = ({todo}) => {

    const handleChange = () => {

    }
  return (
    <li className={todo.isDone ? 'completed' : 'view'} >
      <div className="view">
        <input onChange={handleChange} className="toggle" type="checkbox" />
        <label>{todo.text}</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
};

export default Card;
