import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './app.component';
import { MealToShopComponent } from './homepage/homepage.component';
import { MealManagerComponent } from './meal-manager/meal-manager.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MealStoreService } from './services/meal-store.service';

@NgModule({
  declarations: [
    BaseComponent,
    MealToShopComponent,
    MealManagerComponent,
    NewMealComponent,
    ItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MealStoreService],
  bootstrap: [BaseComponent]
})
export class AppModule { }
