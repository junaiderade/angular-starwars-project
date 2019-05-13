import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() characters;
@Output() sideAssigned2 = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

onSideAssigned(charInfo) {
this.sideAssigned2.emit(charInfo);
}
// the charInfo u get here is from item (item's $event from its emitter, which is an object with name and side)
// the job of this method is to pass that info from item to tabs (the parent)
}
