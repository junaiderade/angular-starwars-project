import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
characters = [
{name: 'Luke Skywalker', side: ''},
// side is null because user should assign them
{name: 'Darth Vader', side: ''},
{name: 'Obi-wan Kenobi', side: ''},
{name: 'Darth Maul', side: ''}
];


chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }
// ----------------------
onSideAssigned2(charInfo2) {
const pos = this.characters.findIndex((char) => {
  return char.name === charInfo2.name;
});
this.characters[pos].side = charInfo2.side;
}
// const means the function does not modify observable state of the object
// pos represents position
// the find index method finds the index of a specific object
// (char => {} ) is the same as function(char) {}
// that func returns a boolean, it returns true if char.name is the same as charInfo2.name
// once it returns true, findIndex will give u the position of that element which u labeled pos
// last line is self explanatory. it sets the side to the side of the data recieved
// -----------------------
onChoose(side) {
  this.chosenList = side;
  // takes input and changes chosen list
}
// -----------------------
getCharacters() {
if (this.chosenList === 'all') {
 return this.characters.slice();
}
return this.characters.filter((char) => {
return char.side === this.chosenList;
});
}
//  slice returns a copy of the array, this is here so u cant edit the original array
// remember that return statements cease execution in a function! so if this return
// is reached it's over
// gets the characters in THIS class
// filter method only returns a subset of the characters that satisfies that condtion
// the chole char => means the char will be passed into the
// you are checking if the char matches your chosen list, which is all rn
// says char is equal or greater than than the boolean expression
// ---------------------------
}
