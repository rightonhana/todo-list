import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
	@Input() public task: string;
	@Input() public done: boolean;
	@Input() public id: number;
	@Output() public readonly changeDone = new EventEmitter<number>();
	@Output() public readonly remove = new EventEmitter<number>();

	public changeHandler(event: any) {
		event.preventDefault();
		this.changeDone.emit(this.id);
	}

	public removeHandler(event: any) {
		event.preventDefault();
		this.remove.emit(this.id);
	}
}
