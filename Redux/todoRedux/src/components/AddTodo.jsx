import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handelSubmit(e){
        e.preventDefault();
        if(!text.trim()) return;

        dispatch(addTodo(text));
        setText("");
    }

  return (
    <>
    <form onSubmit={handelSubmit}>
        <input 
        type='text'
        value={text}
        onChange={(e)=> setText(e.target.value)}
        placeholder='Add Task'
        />
        <button type='submit'>Add</button>
    </form>
    </>
  )
}

export default AddTodo