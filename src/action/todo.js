import * as actionType from './type';

const BASE_URL = "https://serene-ravine-67977.herokuapp.com/api";

export const addTodo = payload =>{
    return {
        type: actionType.ADD_TODO,
        payload
    }
}

export const getTodos = payload => {
    return {
        type: actionType.FETCH_TODOS,
        payload
    }
}

export const deleteTodo = id => {
    return {
        type: actionType.DELETE_TODO,
        payload: id
    }
}

export const getError = () =>{
    return {
        type: actionType.ERROR
    }
}

export const fetchTodos = ()=> {
    return async(dispatch) => {
        try {
            const url = `${BASE_URL}/get-todos`;
            const request = await fetch(url);
            const response = await request.json();
            console.log(response);
            dispatch(getTodos(response.data))
        } catch (error) {
            console.log(error.response);
            dispatch(getError())
        }
        
    }
}

export const createTodo = (payload) =>{
    return async (dispatch) =>{
        try {
            const url = `${BASE_URL}/todos`
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const response = await request.json();
            console.log(response);
            dispatch(addTodo(response.todo));
        } catch (error) {
            dispatch(getError())
        }

    }
}

export const deleteTask = (id) =>{
    return async (dispatch) =>{
        try {
            const url = `${BASE_URL}/todos/${id}`
            const request = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            await request.json();
            dispatch(deleteTodo(id));
        } catch (error) {
            dispatch(getError())
        }

    }
}