import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

const App = () => {
  return (
    <div>
      <h1> Todo App </h1>
      <AddTodo />
      <TodoFilter />
      <TodoList />
    </div>
  )
}

export default App