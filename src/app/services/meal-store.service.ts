import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class MealStoreService {

    private mealStoreSource = new BehaviorSubject([]);
    mealStore = this.mealStoreSource.asObservable();

    constructor() { }

    addMealToStore(meal: { title: string, ingredients: string[] }) {
        const currentStore = this.mealStoreSource.value;
        this.mealStoreSource.next([...currentStore, meal]);
        console.log('mealstore', this.mealStoreSource.value);
    }
}
