import React from "react";
import { useDispatch } from "react-redux";
import * as actions from '../../action/index';

const TodoItem = ({ todo, removeTodo, props }) => {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      {todo.title}  <p className="mt-2">UserId: {todo.userId}</p>
      {
        todo.completed ? <p className="mt-2 text-success">Completed</p> : <p className="mt-2 text-primary">Pending</p>
      }
      <i
        className="fa fa-trash text-danger float-right"
        onClick={() => dispatch(actions.deleteTask(todo.id))}
      ></i>
    </li>
  );
};


export default TodoItem;
