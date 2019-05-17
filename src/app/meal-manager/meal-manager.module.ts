import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { MealManagerComponent } from './meal-manager.component';

@NgModule({
  declarations: [
    MealManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class MealManagerModule { }
