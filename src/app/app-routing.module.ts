import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealToShopComponent } from './homepage/homepage.component';
import { MealManagerComponent } from './meal-manager/meal-manager.component';
import { NewMealComponent } from './new-meal/new-meal.component';

const routes: Routes = [
    { path: 'homepage', component: MealToShopComponent },
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'meal-manager', component: MealManagerComponent },
    { path: 'new-meal', component: NewMealComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
