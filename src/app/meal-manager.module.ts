import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MealManagerComponent } from './meal-manager.component';
import { NewMealComponent } from './new-meal.component';

@NgModule({
  declarations: [
    MealManagerComponent,
    NewMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class MealManagerModule { }
