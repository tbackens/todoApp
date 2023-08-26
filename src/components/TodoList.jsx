import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import {db} from '../firebase';


const TodoList = () => {
    const [list, setList] = useState([])
    const [todo, setTodo] = useState('')
    const [showAddBox, setShowAddBox] = useState(false)

    const handleTextchange = (e) => {
        e.preventDefault();
        setTodo(e.target.value)
    }

    const abortButtonClick = () => {
        setTodo('');
        setShowAddBox(false)
    }
    const addButtonClick = () => {
        setShowAddBox(true)
    }



    const addTodo = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
            setTodo('')
            setShowAddBox(false)    
        }
        catch (e) {
            console.error("Error adding document: ", e);
          }
    }



    const addBox = (
        <div>
            <form className="form">
                <div class="mb-3">
                    <label for="todoText" class="form-label">New ToDo</label>
                    <textarea class="form-control" id="todoText" rows="2" value={todo} onChange={handleTextchange}></textarea>
                </div>
            </form>
            <button className='btn btn-success mx-1' onClick={addTodo}>Submit</button>
            <button className='btn btn-danger mx-1' onClick={abortButtonClick}>Cancel</button>
        </div>
    )


    useEffect(() => {
        onSnapshot(collection(db, 'todos'), (snapshot) => {
            setList(snapshot.docs.map(doc => doc.data()))})   
    }, [])

  return (
    <div className="container mt-2">
        {!showAddBox && <button className='btn btn-success' onClick={addButtonClick}>Add</button>}
        {showAddBox && addBox}
        <div className='mt-4'>
            <h4>ToDo List</h4>
            {list.map((i) => {
                return (<div class="card bg-light m-4" id={i.id}>
                    <div class="card-body">
                    {i.todo}
                    </div>
              </div>)
            })}
        </div>
    </div>
  )
}

export default TodoList