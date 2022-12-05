import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-dispaly',
  templateUrl: './game-dispaly.component.html',
  styleUrls: ['./game-dispaly.component.scss']
})


export class GameDispalyComponent implements OnInit,OnChanges {
  @Input() guesses: string[]=[];
  @Input() question: string ='';
  Max_mastakes=7;
  mistakeRemaning;
  constructor(){
    this.mistakeRemaning=this.Max_mastakes
  }

  isButtonVisible1= true;
  isButtonVisible2= true;
  isButtonVisible3= true;

  ngOnChanges(changes:SimpleChanges):void {
    if (changes['guesses'].currentValue&& changes['guesses'].currentValue.length &&changes['guesses'].currentValue != changes['guesses'].previousValue) {
      console.log(changes['guesses'].currentValue)
    }
  }



  ngOnInit():void {}

}
