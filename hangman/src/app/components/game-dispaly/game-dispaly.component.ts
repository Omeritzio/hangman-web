import { Component } from '@angular/core';

@Component({
  selector: 'app-game-dispaly',
  templateUrl: './game-dispaly.component.html',
  styleUrls: ['./game-dispaly.component.scss']
})
export class GameDispalyComponent {

  
  isButtonVisible1= true;
  isButtonVisible2= true;

  easy:string[] =["banna", "apple", "iphone", "keyboard", "javascript", "gaming", "network"];
  
  randomValue:string = this.easy[Math.floor(Math.random() * this.easy.length)];

  myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
  'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];


}
