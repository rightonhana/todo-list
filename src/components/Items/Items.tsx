import { FC } from "react";
import Item from "../Item/Item";
import ItemsProps from "./ItemsProps";
import styles from "./Items.module.css";

export const Items: FC<ItemsProps> = ({ items }) => (
	<ul className={styles.TodoList}>
		{items.map((item, index) => (
			<Item
				key={index}
				value={item.value}
				done={item.done}
				id={item.id}
			/>
		))}
	</ul>
);
//{...item}

export default Items;