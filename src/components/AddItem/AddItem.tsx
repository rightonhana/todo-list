import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice";
import styles from "./AddItem.module.css";

export const AddItem: FC<{}> = ({ ...props }) => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(
			addTodo({
				value: input,
				done: false,
				id: Date.now()
			})
		);
		setInput("");
	};

	return (
		<form className={styles.Form} onSubmit={onSubmit} {...props}> 
			<TextField className={styles.Input} value={input} onChange={(event) => setInput(event.target.value)} label="Task" variant="outlined" />
			<Button className={styles.Button} variant="contained" type="submit" color="primary">Add to-do</Button>
		</form> 
	);
};

export default AddItem;