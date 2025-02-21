import React, { useEffect, useState } from 'react'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

const App = () => {
  
  const [todos,setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function addTodo(title) {
    setTodos((currentTodos)=> {return [...currentTodos,{ id: crypto.randomUUID(), title, completed: false},]})
  }

  

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      } )
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      console.log("Before:", currentTodos); // Old todos
      const newTodos = currentTodos.filter(todo => todo.id !== id);
      console.log("After:", newTodos)
      console.log("After:",currentTodos)
      return newTodos
    })
  }
  return (
    <>
      <NewTodoForm onSubmit = {addTodo}/>
      <h1 className='text-blue-600 text-3xl text-center mb-10 mt-10'>To Do List</h1>
      <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

    </>
  )
}

export default App
