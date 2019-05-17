import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { NewMealComponent } from './new-meal.component';
import { ItemComponent } from '../item/item.component';

@NgModule({
  declarations: [
    NewMealComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class NewMealModule { }
