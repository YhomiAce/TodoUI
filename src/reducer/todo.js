import * as actionType from '../action/type';

const initialStae = {
    todos: []
}

const TodoReducer = (state = initialStae, action) =>{
    const {type, payload} = action;
    switch (type) {
        case actionType.FETCH_TODOS:
            return {
                ...state,
                todos: payload
            }
        case actionType.ERROR:
            return {
                ...state,
                todos: []
            }
        case actionType.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(payload)
            }
        case actionType.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
    
        default: return state
    }
}

export default TodoReducer;