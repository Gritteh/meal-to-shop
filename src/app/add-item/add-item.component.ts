import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
    @Output() newItem: EventEmitter<string> = new EventEmitter<string>();
    name = '';

    keyPress(event: KeyboardEvent) {
        this.name = (event.target as HTMLInputElement).value;
    }
    finishedTyping() {
        this.newItem.emit(this.name);
        this.name = '';
    }

}
