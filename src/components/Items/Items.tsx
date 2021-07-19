import { FC } from "react";
import Item from "../Item/Item";
import ItemsProps from "./ItemsProps";
import styles from "./Items.module.css";

export const Items: FC<ItemsProps> = ({ items }) => (
	<ul className={styles.TodoList}>
		{items.map(({value, done, id}) => (
			<Item
				key={id}
				value={value}
				done={done}
				id={id}
			/>
		))}
	</ul>
);

export default Items;