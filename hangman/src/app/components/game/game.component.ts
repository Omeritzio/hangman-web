import { Component,Output,Input,EventEmitter,ViewChild} from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Location } from '@angular/common';
import { timer } from 'rxjs';
import {GameDispalyComponent} from '../game-dispaly/game-dispaly.component'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
  
})



export class GameComponent {
  // -----------buttons---------------
  isButtonVisible1=true;
  isButtonVisible2=true;
  isButtonVisible3=true;

// ----------Game------------
  mistakesRemaining=7;
  timeLeft=30;
  interval:any;
  @Output() gameFinished = new EventEmitter<boolean>()
  success: boolean = false;


  question:string='';
  questions:string[]=[];
  guesses:string[]=[];
  category:string ='';
  restartGamebtnShown=false;
  


  constructor(private gameService:GameService , private location: Location,public gameDispaly:GameDispalyComponent ) {};




  
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
    this.pauseTimer();
    this.timeLeft=30;
    this.startTimer();
  }


  reset() {
    this.guesses = [];
    this.pickNewQuestion();
    this.restartGamebtnShown = false;
    this.mistakesRemaining=7;
    this.timeLeft=30;
    
    
  }

  pickNewQuestion(){
    const randomIndex =Math.floor(Math.random() * this.questions.length);
    this.question =this.questions[randomIndex];
    console.log(this.question);
  }
  onGameFinished(){
    this.restartGamebtnShown=true;
    this.pauseTimer()
  }

  easy(){
    this.gameService.getQuestions('assets/languages.json').subscribe((response) => {
      this.questions = response.items;
      this.category = response.category;
      this.pickNewQuestion();
    });
  }


  hard(){
    this.gameService.getQuestions('assets/hard.json').subscribe((response) => {
      this.questions = response.items;
      this.category = response.category;
      this.pickNewQuestion();
    });
  }


  
  public startTimer() {
    this.interval= setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.mistakesRemaining=0;
          this.gameFinished.emit(this.success);
          this.pauseTimer()
          this.onGameFinished()
        }
      },1000)
      
      
    }
  
  pauseTimer() {
    clearInterval(this.interval);
    
  }
  



}
 




