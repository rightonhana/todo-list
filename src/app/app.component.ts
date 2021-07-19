import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './services/task-service.service';
import { Task } from './types/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public title = 'todo-list';
	public tasks: Task[];

	constructor(private todoList: TaskServiceService) {}

	public ngOnInit() {
		this.subscriptions();
	}

	public addTask(task: string) {
		this.todoList.addTask({
			task,
			done: false,
			id: Date.now()
		});
	}

	public updateTask(id: number) {
		this.todoList.updateTask(id);
	}

	public removeTask(id: number) {
		this.todoList.removeTask(id);
	}

	private subscriptions() {
		this.todoList.list$.subscribe(toDos => this.tasks = toDos);
	}
}
