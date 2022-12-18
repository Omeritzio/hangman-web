import { Component,Output,Input,EventEmitter,ViewChild} from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Location } from '@angular/common';
import {GameDispalyComponent} from '../game-dispaly/game-dispaly.component'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
  
})



export class GameComponent {
  // -----------buttons dispalys---------------
  isButtonVisible1=true;
  isButtonVisible2=true;
  isButtonVisible3=true;

// ----------Game------------
  mistakesRemaining=7;
  timeLeft=30;
  interval:any;
  @Output() gameFinished = new EventEmitter<boolean>()
  success: boolean = false;

// ----------Inputs------------
  question:string='';
  questions:string[]=[];
  guesses:string[]=[];
  category:string ='';
  restartGamebtnShown=false;
  


  constructor(private gameService:GameService , private location: Location,public gameDispaly:GameDispalyComponent ) {};




  // ----------Initilazer when starting the game get a question from default // Intantially let it stay cuz it gives more buttons randomaly------------
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
// ----------Check guesses and give 30 sec for each click------------
  guess(letter:string){
    if (!letter || this.guesses.includes(letter)){
      return;
    }
    this.guesses= [... this.guesses,letter];
    this.pauseTimer();
    this.timeLeft=30;
    this.startTimer();
  }

// ----------The reset function------------
  reset() {
    this.guesses = [];
    this.pickNewQuestion();
    this.timeLeft=30;
    this.restartGamebtnShown = false;
    this.mistakesRemaining=7;
    
    
  }
// ----------The function that gets the randomaly question ------------
  pickNewQuestion(){
    const randomIndex =Math.floor(Math.random() * this.questions.length);
    this.question =this.questions[randomIndex];
    console.log(this.question);
  }

  // ----------The function that gets the randomaly question ------------
  onGameFinished(){
    this.restartGamebtnShown=true;
    this.pauseTimer()
  }


   // ----------The functions that get each category from each json path// started with languages.json that is default than made new function that recieve the name  ------------
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

  custome(a:string){
    this.gameService.getQuestions('assets/'+a+'.json').subscribe((response) => {
      this.questions = response.items;
      this.category = response.category;
      this.pickNewQuestion();
    });
  }


// ----------The functions that gives timer  ------------
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
 




