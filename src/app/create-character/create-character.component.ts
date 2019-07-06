import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
availableSides = [
{display: 'None', value: ''},
{display: 'Light', value: 'light'},
{display: 'Dark', value: 'dark'}];
// this is an array of objects, the display value is what gets displayed in the dropdown
swService: StarWarsService; // u do this to store the service in a property of the file

constructor(swService1: StarWarsService) {
  this.swService = swService1;
  // means the swService property of the class is equal to argument recieved
 }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
  if(submittedForm.invalid){
    return;
  }
  // remember that returning exets from the function
  this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  // the .name and .side come from the name property within the variables
  // uses the swServive in the componeent and adds character
  }

}
