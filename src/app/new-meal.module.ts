import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { NewMealComponent } from './new-meal.component';
import { MealManagerComponent } from './meal-manager.component';

@NgModule({
  declarations: [
    NewMealComponent,
    MealManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class NewMealModule { }
