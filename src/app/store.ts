import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import TodoItem from '../types/TodoItem';

export const loadState = () => {
	try {
		const todoState = localStorage.getItem('appState');
		if (todoState === null) {
			return undefined;
		}
		return JSON.parse(todoState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state: { todos: TodoItem[]}) => {
	try {
		const todoState = JSON.stringify(state);
		localStorage.setItem('appState', todoState);
	} catch(error) {
		console.log(error);
	}
};

export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
	preloadedState: loadState()
});

store.subscribe(() => saveState(store.getState()));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
