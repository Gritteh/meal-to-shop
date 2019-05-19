import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MealStoreService } from '../services/meal-store.service';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.scss']
})
export class NewMealComponent implements OnInit {
    @Output() closeNewMeal: EventEmitter<any> = new EventEmitter<any>();
    mealTitle = '';
    currentIngredient = '';
    ingredients: string[] = [];
    inputVal: string;
    meals: {title: string, ingredients: string[]}[];

    constructor(private data: MealStoreService) {}

    ngOnInit() {
        this.data.mealStore.subscribe(meals => this.meals = meals);
    }

    newItemHandler(newItem: string) {
        this.ingredients.push(newItem.charAt(0).toUpperCase() + newItem.slice(1));
    }

    saveMeal() {
        this.data.addMealToStore({title: this.mealTitle, ingredients: this.ingredients});
        this.closeNewMeal.emit();
    }

    removeItem(index: number) {
        this.ingredients.splice(index, 1);
    }

    changeItemValue(obj: {i: number, input: string}) {
        this.ingredients.splice(obj.i, 1, obj.input);
    }

    trackFunc(index: number) {
        return index;
    }

    updateTitle(event: KeyboardEvent) {
        const rawTitle = (event.target as HTMLInputElement).value;
        this.mealTitle = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1);
    }
}
