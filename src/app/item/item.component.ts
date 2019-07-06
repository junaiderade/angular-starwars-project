import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']

})
export class ItemComponent implements OnInit {
@Input() character;
swService: StarWarsService;
// swService is of type StarWarsService

  constructor(swService: StarWarsService) {
  this.swService = swService;
   }

  ngOnInit() {
  }

onAssign(side1) {
this.swService.onSideAssigned2({name: this.character.name, side: side1 });
// here u import from the service and use its onSideAssigned2 method
// this method is called in the item html

}
}
