
const initialState = {
    todos : []
}

const todoReducer = (state=initialState,action) => {
    switch(action.type) {
        case "ADD_TODO":
            console.log('eklendi')
            const newTodos = state.todos.concat(action.payload)
            return {...state,todos:newTodos};
        case "UPDATE_TODO": 
       
        const uptadedList = state.todos.map((todo)=> todo.id === action.payload.id ? action.payload : todo )
            //kodlar
            return {...state,todos:uptadedList};
        case "DELETE_TODO":
        const filtered = state.todos.filter((todo)=> todo.id !==action.payload)

        return {...state,todos:filtered}
        default :
            //kodlar
            return state;
    }
}
export default todoReducer;