import { Component } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent {
  question:string='';
  questions:string[]=[];
  guesses:string[]=[];
  category:string ='';

  constructor(private gameService:GameService) {

  }
  ngOnInit():void{
    this.gameService.getQuestions().subscribe((response)=>{
      this.questions =response.items;
      this.category=response.category
      this.pickNewQuestion();
    });
  }

  guess(letter:string){
    if (!letter || this.guesses.includes(letter)){
      return;
    }
    this.guesses= [... this.guesses,letter];

  }

  dummyClick(){
    const key =prompt('Enter a key') || '';
    this.guess(key)
  }

  reset() {
    this.guesses=[];
    this.pickNewQuestion();
  }

  pickNewQuestion(){
    const randomIndex =Math.floor(Math.random() * this.questions.length);
    this.question =this.questions[randomIndex];
    console.log(this.question);
  }
}