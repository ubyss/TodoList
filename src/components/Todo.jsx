import React from 'react'

const Todo = ({text, todos, setTodos, todo}) => {
  const deleteBtn = () => {
    setTodos(todos.filter((item) => item.id !== todo.id))
  }

  const completeBtn = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
      <button onClick={completeBtn} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteBtn} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo