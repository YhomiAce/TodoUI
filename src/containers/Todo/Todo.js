import React, { Fragment, useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';


const Todo = ({onFetchTodos}) => {
    const [todos, setTodos] = useState([]);
    
    // const addTodo = (data) =>{
    //     const todo = {
    //         id: Math.random(100000),
    //         ...data
    //     }
    //     const newTodo = todos.concat(todo)
    //     setTodos(newTodo)
    // }

    const removeTodo = id =>{
        const todo = todos.filter(todo => todo.id !== id);
        setTodos(todo)
    }
    return (
        <Fragment>
            <TodoForm />
            <br />
            <TodoList todos={todos} removeTodo={removeTodo} />
        </Fragment>
    )
}



export default Todo;
