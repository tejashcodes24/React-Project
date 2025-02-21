import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className='flex flex-col justify-center items-center gap-10'>
        {todos.length == 0 && <span className="text-red-500 font-semibold text-3xl">No Todos</span>}
        {todos.map((todo) => {
          return (
            <TodoItem 
            //{...todo}
            //or you can write props like below both are same
            id={todo.id} 
            completed={todo.completed} 
            title= {todo.title}
            // ----
            
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id} // passing key here because it is an array containing different objects
            />
          )
        })}
        
      </ul>
  )
}

export default TodoList
