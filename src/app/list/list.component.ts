import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy { // on destroy is used to unsbscribe from subscriptions
characters = [];
activatedRoute: ActivatedRoute; // Contains the information about a route associated with a component loaded in an outlet
swService: StarWarsService; // injects your data, remember that StarWarsService is the type of service
// and that all types need to be imported
// remember, u set all ur data in the starwars service
loadedSide: 'all'; // means loaded side is all by default
subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
   // i think the reason you pass these parameters in specific is because you only set the type when u initialized the variabls
   // but u didnt set the value and this sets that value
    this.activatedRoute = activatedRoute;
    this.swService = swService;
    // this constructer function sets the values the object needs with the info from parameters
    // Use the constructor to initialize class members and
    // for dependency injection. Use ngOnInit for initialization and logic work.
   }

  ngOnInit() {
    // ngOnInit signals that Angular has finished initializing and setting up component.
    //  The ngOnInit is called after the constructor is executed.
    this.activatedRoute.params.subscribe( // subscribe can fit 3 functions
      // subscribe is a method from rxjs which angular uses internally
      // how this method works. you get the params from the activated route.
      // if you go to routes u will see where params comes from. subscribe listens for changes in params aka the url
      // it uses getcharacters from the swService to get the characters for whichiver side u are on
      (params) => { // this function is executed whenever parameters change
        this.characters = this.swService.getCharacters(params.side); // params.side comes from the routing in app module.it is an observable
        this.loadedSide = params.side;
      }
    );

    this.subscription = this.swService.charactersChanged.subscribe(
      // this subscribes to the charactersChanged variable in swService, which is an observable so it can be subscribed to
      // chractersChanged gets .next in the onSideAssigned2 method which triggers this
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide); // gets characters for currently loaded list
        // u were having a problem of when u switched a character while in light or dark,
        // it doesnt dissapear and go until u click on the other. this fixes that by making it reactive
      }

    );

  }

  ngOnDestroy() { // angular executes this method whenever this component is about to get destroyed
    // a componenent is destroyed when routes changed, but there are other ways too
this.subscription.unsubscribe(); // this removes the subscription so it doesnt pollute memory
  }
}
