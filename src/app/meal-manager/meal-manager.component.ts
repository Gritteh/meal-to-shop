import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-manager',
  templateUrl: './meal-manager.component.html',
  styleUrls: ['./meal-manager.component.scss']
})
export class MealManagerComponent {
    @Input() ngClass: any;
    makingMeal: boolean;
    showNew() {
        this.makingMeal = true;
    }
    closeNew() {
        this.makingMeal = false;
    }
}
