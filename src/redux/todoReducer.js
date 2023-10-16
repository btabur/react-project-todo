
const initialState = {
    todos : [{
        text:'',
        isDone:false,
    }],
}

const todoReducer = (state=initialState,action) => {
    switch(action.type) {
        case "ADD_TODO":
            console.log('eklendi')
            const newTodos = state.todos.concat(action.payload)
            return {...state,todos:newTodos};
        case "DELETE_TODO": 
            //kodlar
            return '';
        default :
            //kodlar
            return state;
    }
}
export default todoReducer;