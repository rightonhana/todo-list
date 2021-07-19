import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
	@Input() public task: string;
	@Output() public readonly taskChange = new EventEmitter<string>();

	public onSubmit(event: Event) {
		event.preventDefault();
		this.taskChange.emit(this.task);
		this.task = "";
	}
}
