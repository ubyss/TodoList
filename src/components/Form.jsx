import React from 'react'

const Form = ({ inputText, setInputText, setTodos, todos, setFilter}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}])
    setInputText('')
    if(inputText === ''){
      alert('Você precisa digitar alguma tarefa para adiciona-la')
    }
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const filterBtn = (e) =>{
    setFilter(e.target.value)
  }


  return (
    <form >
      <input onChange={handleInputChange} value={inputText} type="text" className="todo-input" />
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterBtn} name="todos" className="filter-todo">
          <option value="all">Todas</option>
          <option value="completed">Completos</option>
          <option value="uncompleted">Incompletos</option>
        </select>
      </div>
    </form>
  )
}

export default Form