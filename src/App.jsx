import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [filteredTodo, setFilteredTodos] = useState([])


  useEffect(() => {
    getLocal()
  }, [])
  

  const filterHandler = () => {
    switch (filter) {
        case 'completed': 
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos)
        break
    }
    
  }

  useEffect(() => {
    filterHandler()
    saveLocal()
  }, [todos, filter])

  const saveLocal = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocal = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)))
      setTodos(local)
    }
  }
  return (
    <>
      <header>
        <h1>Lista de tarefas</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        setTodos={setTodos} 
        inputText={inputText}
        todos={todos}
        setFilter={setFilter}
        
        />
      <TodoList 
        todos={todos}
        setTodos={setTodos} 
        filteredTodo={filteredTodo}/>
    </>
  );
}

export default App;
