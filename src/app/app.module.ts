import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './app.component';
import { MealToShopComponent } from './homepage.component';
import { MealManagerComponent } from './meal-manager.component';
import { NewMealComponent } from './new-meal.component';

@NgModule({
  declarations: [
    BaseComponent,
    MealToShopComponent,
    MealManagerComponent,
    NewMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
