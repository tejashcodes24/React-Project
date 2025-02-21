import React from 'react'

const TodoItem = ({completed , id , title, toggleTodo, deleteTodo}) => {
  return (
    <li  className='flex  justify-center items-center gap-3'>
                <label className='text-white text-3xl'>
                    <input type="checkbox" checked={completed} className='bg-white w-6 h-6 transition-all duration-300 ease-in-out'
                    onChange={e => toggleTodo(id,e.target.checked)}/>
                      {title}
                </label>
                <button onClick={() => deleteTodo(id)} className='bg-red-600 p-5 rounded-2xl text-2xl hover:bg-blue-500'>Delete</button>
    </li>
  )
}

export default TodoItem
