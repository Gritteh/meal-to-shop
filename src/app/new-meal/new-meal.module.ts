import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { NewMealComponent } from './new-meal.component';
import { ItemComponent } from '../item/item.component';
import { AddItemComponent } from '../add-item/add-item.component';

@NgModule({
  declarations: [
    NewMealComponent,
    ItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class NewMealModule { }
