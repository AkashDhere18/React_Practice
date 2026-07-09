import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
    filter: "all",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(),
                text: action.payload,
                completed: false,
            };

            state.todos.push(todo);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((t) => t.id === id);
            if(todo) todo.text = text;
        },

        toggleComplete: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if(todo) todo.completed = !todo.completed;
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete, setFilter} = todoSlice.actions;

export default todoSlice.reducer;