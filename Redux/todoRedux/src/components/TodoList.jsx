import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
    const {todos, filter} = useSelector((state) => state.todo);

    const filteredTodos = todos.filter((todo) => {
        if(filter === "completed") return todo.completed;
        if(filter === "pending") return !todo.completed;
        return true;
    });

    if(filteredTodos.length === 0 ) return <p>No task to show</p>;

  return (
    <>
    <ul>
        {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
    </>
  )
}

export default TodoList