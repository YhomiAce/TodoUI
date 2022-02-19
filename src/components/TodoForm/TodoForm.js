import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from '../../action/index'

const TodoForm = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    todo: "",
    completed: "",
  });

  const { todo, completed } = formInput;
  const onChangeHandler = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) =>{ 
    e.preventDefault();
    if (todo === "" || completed === "") {
      alert("Please fill all fields");
    }
    let comp = false;
    if (completed === "false") {
      comp = false;
    }else if (completed === "true") {
      comp = true;
    }
    const payload = {
      title: todo,
      completed: comp
    };
    dispatch(actions.createTodo(payload))
    setFormInput({
      todo: "",
      completed: ""
    })
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card border-primary">
          <div className="card-header">
            <h3>Add A Todo</h3>
          </div>
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="todo">Enter Todo</label>
                <input
                  type="text"
                  name="todo"
                  value={todo}
                  onChange={onChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <select 
                  name="completed" 
                  onChange={onChangeHandler}
                  className="form-control"
                  defaultValue={completed}
                >
                  <option>Enter Todo Status</option>
                  <option value="false">Pending</option>
                  <option value="true">Completed</option>
                </select>
                
              </div>
              <button type="submit" className="btn btn-primary btn-block">Add Todo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TodoForm;
