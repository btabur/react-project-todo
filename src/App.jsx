import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { useSelector } from 'react-redux'
import Card from "./components/Card";
import { useDispatch } from "react-redux";

function App() {
  const state = useSelector((store)=>store)
  const [willmakeTodos,setWillMakeTodos] = useState([])
  const [makedTodos,setMakedTodos] = useState([])

  const [showAll,setShowAll] = useState(true)
  const [showActive,setShowActive] =useState(false)
  const [showCompleted,setShowCompleted] = useState(false)

  const [isAllCheked,setIsAllCheked]=useState(false)

  const dispatch= useDispatch()
 
  useEffect(()=> {
 //yapılacak todo ları ayrı bir diziye aktarıyoruz
 const toDoMakeTodos = state.todos && state.todos.filter((todo) => !todo.isDone);
    setWillMakeTodos(toDoMakeTodos)
  
    //yapılmış olan todoları da ayrı bir listeye aktarıyoruz
    const maked = state.todos && state.todos.filter((todo) => todo.isDone);
    setMakedTodos(maked)

  },[state])

  const handleDeleteComplated =()=> {
        makedTodos.map(todo=> {
          
          dispatch({
            type:"UPDATE_TODO",
            payload:todo.id
          })

        })
  }
  const toogleMakeCompleted =()=> {
   
   
      state.todos.map((todo) => {

        if(isAllCheked) {
          todo.isDone=true;
          setIsAllCheked(false)
        }else {
          todo.isDone=false
          setIsAllCheked(true)
        }

        dispatch({
          type:"UPDATE_TODO",
          payload:todo
        })
      })
  }

  return (
    <div>
      <section className="todoapp">
       
          <Header/>
        <section className="main">
          <input  className="toggle-all" type="checkbox" />
          <label onClick={toogleMakeCompleted} htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {/* Tüm todo ları ekranda gösteerir */}
           {showAll &&
             state.todos.map((todo,index)=> (<Card key={index} todo={todo}/>))
           }
           {/* yapılacak olan todoları gösterir */}
          {showActive &&
               willmakeTodos.map((todo,index)=> (<Card key={index} todo={todo}/>))
             }
             {/* Yapılmış olan todoları gösterir */}
              {showCompleted &&
               makedTodos.map((todo,index)=> (<Card key={index} todo={todo}/>))
             }
          </ul>
        </section>

        <footer  className={state.todos.length == 0 ? 'hidden' : 'footer'}>
          <span className="todo-count">
            <strong>{willmakeTodos.length}</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a onClick={ ()=> {
                setShowAll(true)
                setShowActive(false)
                setShowCompleted(false)
              }} 
              href="#/" className={showAll ? "selected" :'' }>
                All
              </a>
            </li>
            <li>
              <a onClick={ ()=> {
                setShowAll(false)
                setShowActive(true)
                setShowCompleted(false)
              }} href="#/"
              className={showActive ? "selected" :'' }
              >Active</a>
            </li>
            <li>
              <a
              onClick={ ()=> {
                setShowAll(false)
                setShowActive(false)
                setShowCompleted(true)
              }}
              href="#/"
              className={showCompleted ? "selected" :'' }
              >Completed</a>
            </li>
          </ul>

         {makedTodos.length ? <button onClick={handleDeleteComplated} className="clear-completed">Clear completed</button> : ''}
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
