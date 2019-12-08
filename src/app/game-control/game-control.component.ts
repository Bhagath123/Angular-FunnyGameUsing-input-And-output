import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() numberFired=new EventEmitter<number>();
  value;
  i=0;
constructor() { }
  onStart(){
    this.value=setInterval(()=>{
      this.numberFired.emit(this.i+1);
      this.i++;
    },1000)

  }
  onPause(){
    clearInterval(this.value)
  }
  ngOnInit() {
  }

}
