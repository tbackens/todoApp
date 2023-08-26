import React, { useState } from 'react'

const TodoList = () => {
    const [list, setList] = useState([])
    const [todo, setTodo] = useState()
    const [showAddBox, setShowAddBox] = useState(true)

    const handleTextchange = (e) => {
        e.preventDefault();
        setTodo(e.target.value)
    }

    const addTodo = async (data) => {
        
    }

    const addBox = (
        <div>
            <form className="form">
                <div class="mb-3">
                    <label for="todoText" class="form-label">New ToDo</label>
                    <textarea class="form-control" id="todoText" rows="2" value={todo} onChange={handleTextchange}></textarea>
                </div>
            </form>
            <button className='btn btn-success' role='submit'>Submit</button>
        </div>
    )

  return (
    <div className="container mt-2">
        {!showAddBox && <button className='btn btn-success'>Add</button>}
        {showAddBox && addBox}
    </div>
  )
}

export default TodoList