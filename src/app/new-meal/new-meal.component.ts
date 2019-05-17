import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.scss']
})
export class NewMealComponent {
    @Output() closeNewMeal: EventEmitter<any> = new EventEmitter<any>();
    currentIngredient = '';
    ingredients: string[] = [];
    inputVal: string;

    keyPress(event: KeyboardEvent) {
        this.currentIngredient = (event.target as HTMLInputElement).value;
    }
    addIngredient(ingredient: string) {
        this.ingredients.push(ingredient.charAt(0).toUpperCase() + ingredient.slice(1));
        this.currentIngredient = '';
    }
    newItemHandler(newItem: string) {
        this.ingredients.push(newItem.charAt(0).toUpperCase() + newItem.slice(1));
    }

    saveMeal() {
        this.closeNewMeal.emit();
    }

}
