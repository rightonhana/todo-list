import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';
import TodoItem from "../types/TodoItem";

const initialState: TodoItem[] = []

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, { payload }: PayloadAction<TodoItem>) => payload.value !== "" ? [
			...state,
			payload
		] : state,
		setDone: (state, { payload }) => state.map(item => payload === item.id ? {...item, done: !item.done} : item),
		deleteTodo: (state, { payload }) => state.filter(item => payload !== item.id)
	}
});

export const { addTodo, setDone, deleteTodo } = todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todos;

export default todoSlice.reducer;