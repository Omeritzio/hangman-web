import { Component } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent {

  isButtonVisible1=true;
  isButtonVisible2=true;
  isButtonVisible3=true;

  question:string='';
  questions:string[]=[];
  guesses:string[]=[];
  category:string ='';
  restartGamebtnShown=false;

  constructor(private gameService:GameService , private location: Location) {}
   
  
  ngOnInit(): void {
      let jsonPath;
      const url = this.location.path();
      if (url.includes('jsonPath')) {
        jsonPath = url.split('jsonPath=')[1];
      }
      this.gameService.getQuestions(jsonPath).subscribe((response) => {
        this.questions = response.items;
        this.category = response.category;
        this.pickNewQuestion();
      });
    }
  guess(letter:string){
    if (!letter || this.guesses.includes(letter)){
      return;
    }
    this.guesses= [... this.guesses,letter];

  }


  reset() {
    this.guesses=[];
    this.pickNewQuestion();
    this.restartGamebtnShown=false;
  }

  pickNewQuestion(){
    const randomIndex =Math.floor(Math.random() * this.questions.length);
    this.question =this.questions[randomIndex];
    console.log(this.question);
  }
  onGameFinished(){
    this.restartGamebtnShown=true;
  }
}