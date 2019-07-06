import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  swService: StarWarsService;

constructor(swService: StarWarsService){
  this.swService = swService;
}

  ngOnInit() {
    this.swService.fetchCharacters(); // you use this to access API
    // this was originally in the list ts componenet but u moved it here because u dont want it to reset everytime
    // the list componenet gets initialized
  }
}
