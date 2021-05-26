import { FC, MouseEvent } from "react";
import ItemProps from "./ItemProps";
import styles from "./Item.module.css";
import { useDispatch } from "react-redux";
import { setDone, deleteTodo } from  "../../features/todoSlice";
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';

export const Item: FC<ItemProps> = ({ value, done, id }) => {
	const dispatch = useDispatch();


	const handleCheck = () => {
		dispatch(setDone(id));
	}

	const handleDelete = (event: MouseEvent) => {
		event.preventDefault();
		dispatch(deleteTodo(id));
	}
	
	return (
		<li className={styles.Item}>
			<Card color="black" className={styles.TodoCard}>
				<span className={styles.TaskInfo}>
					<Checkbox
						checked={done}
						onChange={handleCheck}
						inputProps={{ 'aria-label': 'primary checkbox' }}
						color="primary"
					/>
					<p className={done ? styles.Done : styles.TaskValue}>{value}</p>
				</span>
				<Button className={styles.Delete} variant="contained" onClick={handleDelete}>&times;</Button>
    		</Card>
			
		</li>
	);
}

export default Item;