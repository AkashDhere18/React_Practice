import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/todo/todoSlice';

const TodoFilter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.todo.filter);

    const filters = ["all", "pending", "completed"];
  return (
    <div>
        {filters.map((f) => (
            <button
            key={f}
            onClick={() => dispatch(setFilter(f))}
             style={{ fontWeight: currentFilter === f ? "bold" : "normal" }}
            >
                {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
        ))}
    </div>
  )
}

export default TodoFilter