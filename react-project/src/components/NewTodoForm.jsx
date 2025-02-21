import React, { useState } from 'react'

const NewTodoForm = ({ onSubmit }) => {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        onSubmit(newItem)
    
        setNewItem("")
      }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-10 justify-center items-center'>
        <div className='flex flex-col gap-10'>
          <label htmlFor="item" className='text-blue-600 text-4xl text-center'>New Item</label>
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id='item' className='bg-blue-400 p-3 rounded-2xl w-3xl'/>
        </div>
        <button className='p-5 bg-amber-500 w-40 text-2xl rounded-2xl'>Add</button>
      </form>
  )
}

export default NewTodoForm
