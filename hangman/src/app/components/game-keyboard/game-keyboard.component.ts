import { ThisReceiver } from '@angular/compiler';
import { Component, Input ,OnInit} from '@angular/core';
import KEY_CHARS from 'src/app/constants/keyCharacter';


interface IKey {
  value:string;
  guessed:boolean;
}

@Component({
  selector: 'app-game-keyboard',
  templateUrl: './game-keyboard.component.html',
  styleUrls: ['./game-keyboard.component.scss']
})
export class GameKeyboardComponent implements OnInit {
  @Input() question ='';
  keys :IKey[]=[];

  constructor(){
    this.keys = KEY_CHARS.split('').map((key) =>{
      return {
        value:key,
        guessed:false,
      }
    })
  }



  ngOnInit(): void{

  }

  onKeyClick(key:IKey):void {
    key.guessed =true;
  }
}
