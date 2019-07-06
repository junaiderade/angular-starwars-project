import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http'; // note that both response and http come from angular/http
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {

  private characters = [
    {name: 'Luke Skywalker', side: ''},
    // side is null because user should assign them, defaults to all
    {name: 'Darth Vader', side: ''},
    {name: 'Obi-wan Kenobi', side: ''},
    {name: 'Darth Maul', side: ''}
    ];
  private logService: LogService;
  // u created this because the constructor needs to bind to a property
  charactersChanged = new Subject<void>(); // indicates something abt the characters array changed
  // a subject is an object provided by that rxjs package, it is like an event emitter, u can emit a value and subscribe to it
  // subject subject is a constructor technically
  http: Http; // you use this to reach out to the web. This service allows us to send all types of requests (get, post, etc).
  // u had to import this in app module

constructor(logService: LogService, http: Http) {
this.logService = logService;
this.http = http;
}


// ------------------------
// so far this function gets an api, transforms the data, then logs it
fetchCharacters() { // here u reach out to the API
this.http.get('https://swapi.co/api/people/').map((response: Response) => {
const data1 = response.json(); // this extracts the data and turns it from json to a real js object
const extractedCharacters = data1.results; // this is here because you dont need all the data, just the objects in the results property
const charsToChange = extractedCharacters.map((char2) => {
return {name: char2.name , side: ''}; // char name is a property of the data u would get back if you console.logged the api
}); // THIS MAP FUNCTION IS A WHOLE DIFF TYPE THAN THE ABOVE, it comes form js not rxjs
// the purpose of the second map function is to transform the old object arrays with all the stuff we dont need and turn it into a new
// array with just the stuff we need. char.name exists because name is a property of the og object from the API
return charsToChange; // remember, charsToChange is an array
})
// you have to import the map operator, you use map to transform the response
.subscribe( // you use in this function on what is returned from the map function
(data) => { // this logs the data u get from the map method
  console.log(data);
  this.characters = data;
  this.charactersChanged.next(); // this lets the subscribe function in list ts know of a change! so data is loaded right
}
);
// angular uses observables to manage requests.if there is no subscription, it does not send a request. that's why u have the console.log
// this.http.post(url, data) // this is how a post request would work. just an ex
// the get method takes one argument at least, but u can pass a optional second. get(url, js object where u can configure extra options)
}

// -----------------------
getCharacters(chosenList) {
  if (chosenList === 'all') {
   return this.characters.slice();
  }
  return this.characters.filter((char) => {
  return char.side === chosenList;
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
onSideAssigned2(charInfo2) {
  const pos = this.characters.findIndex((char) => {
    // the findIndex function works like this: it returns the index of the first element which satisifes the condition
    // it executes the function once for each element in the array. if it doesnt find anything it returns -1
    return char.name === charInfo2.name;
  });
  this.characters[pos].side = charInfo2.side;
  // this part of the function takes pos, the const from above and switches its side
  this.charactersChanged.next(); // this means u emit the next value for the subject, this is for purposes of reactivity.
  this.logService.writeLog('Changed side of ' + charInfo2.name + ' to ' + charInfo2.side);
  // this calls the logService property u made in this class
  }
  // const means the function does not modify observable state of the object
  // pos represents position
  // the find index method finds the index where the boolean equals true
  // (char => {} ) is the same as function(char) {}
  // that func returns a boolean, it returns true if char.name is the same as charInfo2.name
  // once it returns true, findIndex will give u the position of that element which u labeled pos
  // last line is self explanatory. it sets the side to the side of the data recieved
  // -----------------------
addCharacter(name, side) {
  const pos = this.characters.findIndex((char) => {
    return char.name === name;
  }); // same method inluded as onSideAssigned
  if (pos !== -1) {
// position will be -1 if no name is found, preventing user from not entering name or entering the same name
  return;
}
// remember that returning exits from the function
  const newChar = {name, side};
  this.characters.push(newChar);
}
// these parameters come from create-character form




}
