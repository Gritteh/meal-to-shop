import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() name: string;
    @Output() ingredients: string[] = [];

    keyPress(event: KeyboardEvent) {
        this.name = (event.target as HTMLInputElement).value;
    }

    finishedTyping() {
    }
}

