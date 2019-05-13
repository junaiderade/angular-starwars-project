import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() character;
@Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
// u make this event emitter to give the data of the changed side to parent file
// which is list
// remember event emitter is a type of object, just like int or string,
// but it has its own type
  constructor() { }

  ngOnInit() {
  }

onAssign(side1) {
this.sideAssigned.emit({name: this.character.name, side: side1 });
// u have to make this method to emit( give) the data of a changed side
// to list which is the parent class and then actually change the character in tabs thru another
// emitter
}
}
