import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleComplete } from '../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handelEditSave = () => {
        dispatch(editTodo({id: todo.id, text: editText}));
        setIsEditing(false);
    };

  return (
   
    <li>
        <input 
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
        />

        {isEditing ? (
            <>
            <input
             value={editText}
             onChange={(e) => setEditText(e.target.value)} 
            />
            <button onClick={handelEditSave}>Save</button>
            </>
        ) : (
            <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
                {todo.text}
            </span>
        )
    
    }

    { !isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
    <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  )
}


export default TodoItem