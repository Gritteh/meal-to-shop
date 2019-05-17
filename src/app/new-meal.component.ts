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
        console.log(this.currentIngredient);
    }
    addIngredient(ingredient: string) {
        this.ingredients.push(ingredient.charAt(0).toUpperCase() + ingredient.slice(1));
        this.currentIngredient = '';
        console.log(this.ingredients);
    }

    saveMeal() {
        this.closeNewMeal.emit();
    }

}
