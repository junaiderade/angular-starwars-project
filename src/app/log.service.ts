import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

writeLog(logText) {
console.log(logText);
}
// the goal of this method is to log whenever the side of a character is changed

}
