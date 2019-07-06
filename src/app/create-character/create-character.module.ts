import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // because u use forms in create-character
import { CommonModule } from '@angular/common';
import { CreateCharacterComponent } from './create-character.component';


@NgModule({
declarations: [
  CreateCharacterComponent
],
imports: [
  CommonModule, // u need this because u use ngIf and u can only use browserMdouel once
  // but ngIf is part of common module
  FormsModule,
  RouterModule.forChild([
{ path: '', component: CreateCharacterComponent}
  ])
  // child routes allow us to define routes for a given module which is not the app module
  // u still need to have the root path in ur appRoutes
]
})
export class CreateCharacterModule {} // remember, u can name this anything
