import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
	private list = new BehaviorSubject<Task[]>([]);

	public get list$(): Observable<Task[]> {
		return this.list.asObservable();
	}

	public addTask(task: Task): void {
		const currentList = this.list.getValue();
		this.list.next([...currentList, task]);
	}

	public updateTask(id: number, done: boolean) {
		const currentList =  this.list.getValue();
		const toDo = currentList.find(toDo => toDo.id === id);
		const index = currentList.findIndex(toDo => toDo.id === id);
		const updatedList = toDo && index > -1
			? [
				...currentList.slice(0, index),
				{
					...toDo,
					done: done
				},
				...currentList.slice(index + 1)
			]
			: currentList;
		this.list.next(updatedList);
	}

	public removeTask(id: number) {
		const currentList = this.list.getValue();
		const updatedList = currentList.filter(toDo => toDo.id !== id);
		this.list.next(updatedList);
	}
}
