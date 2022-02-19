import React, {useEffect} from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../action/index';


const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) =>{
        return state.todo.todos
    })
    useEffect(() => {
        dispatch(actions.fetchTodos())
    }, [dispatch]);
    console.log(todos.reverse());
    return (
        <div className='row justify-content-center'>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h3>Todos</h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                todos !== null ? todos.map(todo =>{
                                    return <TodoItem key={todo.id} todo={todo} />
                                }): <h3>No Todo</h3>
                            }
                           
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TodoList;
