import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
    @Output() newItem: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('item') itemField: ElementRef;
    name = '';
    placeholder = 'Onions';

    keyPress(event: KeyboardEvent) {
        this.name = (event.target as HTMLInputElement).value;
    }
    finishedTyping() {
        if (this.name !== '') {
            this.newItem.emit(this.name);
            this.name = '';
            this.placeholder = '';
            this.itemField.nativeElement.focus();
        }
    }

}
