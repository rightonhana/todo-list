import { FC } from "react";
import AddItem from "../AddItem";
import Items from "../Items";
import { useSelector } from "react-redux";
import { selectTodoList } from "../../features/todoSlice";
import styles from "./List.module.css";
import Card from '@material-ui/core/Card';

export const List: FC<{}> = ({...props}) => {
	const todoList = useSelector(selectTodoList);

	return (
		<Card className={styles.TodoApp} {...props}>
			<Items items={todoList}/>
			<AddItem/>
		</Card>
	);
}

export default List;