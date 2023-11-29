import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("Go to work");
    const [todos, setTodos] = useState([]);

    // const fetchTodosPromise = () => {
    //     const promise = axios.get("https://kanbas-node-server-app-rcwd.onrender.com/a5/todos");
    //     promise.then((response) => {
    //         console.log(response);
    //         setTodos(response.data);
    //     });
    // };

    const TODO_API = "https://kanbas-node-server-app-rcwd.onrender.com/a5/todos";

    const createTodo = async () => {
        const response = await axios.get(`${TODO_API}/create`);
        setTodos(response.data);
    };
    

    const fetchTodos = async () => {
        const response = await axios.get("https://kanbas-node-server-app-rcwd.onrender.com/a5/todos");
        setTodos(response.data);
    };

    const removeTodo = async (todo) => {
        try {
            const response = await axios.delete(`${TODO_API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        }
        catch (error) {
            console.error(error);
            const message = error.response.data.message || "An unexpected error occurred";
            setErrorMessage(`Unable to delete Todo with ID ${error.response.data.errorId}`);  
        }
    };

    const updateTitle = async () => {
        const response = await axios.get(
          `${TODO_API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
      };

    const postTodo = async () => {
        const response = await axios.post(TODO_API, todo);
        setTodos([...todos, response.data]);
    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(`${TODO_API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
            setTodo({});
        }
        catch (error) {
            console.error(error);
            const message = error.response.data.message || "An unexpected error occurred";
            setErrorMessage(`Unable to delete Todo with ID ${error.response.data.errorId}`);
        }
        
      };
    


    const fetchTodoById = async (id) => {
        const response = await axios.get(`${TODO_API}/${id}`);
        setTodo(response.data);
    };
    
    useEffect(() => {
        fetchTodos();
    }, []);



    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Todos from server</h4>
        <input value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />

        <input value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}  
            className="form-control mb-2"
            type="text"
        />


        <textarea
            style={{ display: 'block', margin: '10px 0', width: '100%', boxSizing: 'border-box'  }}
            onChange={(e) => setTodo({ ...todo,
            description: e.target.value })}
            value={todo.description} type="text"
        />
        <input
            style={{ display: 'block', margin: '10px 0', width: '100%', boxSizing: 'border-box'   }}
            onChange={(e) => setTodo({
            ...todo, due: e.target.value })}
            value={todo.due} type="date"
        />
        <label style={{ display: 'block', margin: '10px 0' }}>
            <input className="me-2"
            onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })}
            value={todo.completed} type="checkbox"
            />
            Completed
        </label>
        <button className="btn btn-warning mb-2 w-100" onClick={postTodo} >
            Post Todo
        </button>
        <button className="btn btn-secondary mb-2 w-100" onClick={updateTodo}>
            Update Todo
        </button>

        <button className="btn btn-primary mb-2 w-100" onClick={createTodo}>
            Create Todo
        </button>
        <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
            Update Title
        </button>

        {errorMessage && (
            <div style={{ backgroundColor: 'pink', color: 'red', padding: '10px', borderRadius: '5px', margin: '10px 0' }} className="alert alert-danger mb-2 mt-2">
            {errorMessage}
            </div>
        )}
        
        <ul className="list-group">
            {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    <button
                        onClick={() => fetchTodoById(todo.id)}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                    </button>
                    <button className="btn btn-danger float-end ms-2" onClick={() => removeTodo (todo)}>
                        Delete
                    </button>
                    <input
                        checked={todo.completed}
                        type="checkbox" readOnly
                    />
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                </li>
            ))}
        </ul>

        <hr/>

        <input
            value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />

        <input
            value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}
            className="form-control mb-2"
            type="text"
        />

        <h4>Updating an Item's Description</h4>
        <input
            value={todo.description}
            onChange={(e) => setTodo({
                ...todo, description: e.target.value })}
            className="form-control mb-2"
            type="text"
        />

        <a href={`${TODO_API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
            className="btn btn-primary me-2" >
            Update Description
        </a>

        
        <h4>Updating an Item's Completion Status</h4>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })}
        />
        <label>{todo.completed ? 'Completed' : 'Not Completed'}</label>
        <br/>

        <a
        href={`${TODO_API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2">
        Update Completed Status
        </a>


        <h3>Updating an Item in an Array</h3>
        <a
            href={`${TODO_API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary me-2" >
            Update Title to {todo.title}
        </a>

        <h3>Deleting from an Array</h3>
        <a href={`${TODO_API}/${todo.id}/delete`}
            className="btn btn-primary me-2">
            Delete Todo with ID = {todo.id}
        </a>


        <h4>Creating new Items in an Array</h4>
        <a href={`${TODO_API}/create`}
            className="btn btn-primary me-2">
            Create Todo
        </a>

        <h4>Filtering Array Items</h4>
        <a href={`${TODO_API}?completed=true`}
            className="btn btn-primary me-2" >
            Get Completed Todos
        </a>


        <h4>Update item title</h4>
        <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value )}/>
        <a href={`${TODO_API}/${id}/title/${title}`}
            className="btn btn-primary me-2">
            Update Todo Title
        </a>


        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value )}/>
        <a href={`${TODO_API}/${id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>


        <h4>Retrieving Arrays</h4>
        <a href={TODO_API} className="btn btn-primary me-2">
          Get Todos
        </a>

        

      </div>
    );
  }
  export default WorkingWithArrays;