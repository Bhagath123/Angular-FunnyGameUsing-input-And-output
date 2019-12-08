import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber:number[]=[];
  evenNumber:number[]=[];
  onnNumberFired(pnumber:number){
if(pnumber % 2===0){
  this.evenNumber.push(pnumber)
}else
this.oddNumber.push(pnumber);
}
}
