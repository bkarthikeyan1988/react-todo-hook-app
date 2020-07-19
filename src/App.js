import React,{ useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { FcTodoList } from 'react-icons/fc';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if(localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return(
    <div className="todoBlock">
      <Container fluid className="todoContainer">
        <h6>React TODO App with local storage</h6>
        <h2 className="title"><FcTodoList /><span>TODO List</span></h2>
        <Todos todos={todos} markComplete={markComplete} />
        <TodoForm addTodos={addTodos} />
      </Container>
      </div>
  )
}

export default App;
