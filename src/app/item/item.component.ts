import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() name: string;
    @Input() itemIndex: number;
    @Output() ingredients: string[] = [];
    @Output() deleteSelf: EventEmitter<number> = new EventEmitter<number>();
    @Output() updateValue: EventEmitter<{i: number, input: string}> = new EventEmitter<{i: number, input: string}>();

    keyPress(event: KeyboardEvent) {
        this.name = (event.target as HTMLInputElement).value;
    }

    finishedTyping() {
    }

    removeSelf() {
        this.deleteSelf.emit(this.itemIndex);
    }

    update() {
        this.updateValue.emit({i: this.itemIndex, input: this.name});
    }
}

