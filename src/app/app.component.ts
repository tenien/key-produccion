import { Component, VERSION } from '@angular/core';
import moment = require('moment');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  year = moment().format('YY')
  month = moment().format('M')
  numero: string = '039';
  fae: string = '131';

  monthLetter = String.fromCharCode(64 + Number(this.month));

  generarkey() {
    var dim = Number(`${this.year}${this.month}${this.numero}${this.fae}`).toString(32).toLocaleUpperCase();
    return `${dim}`;
  }

  returnkey(){

  }



}
