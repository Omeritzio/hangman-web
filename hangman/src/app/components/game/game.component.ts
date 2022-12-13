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
  @Input() interval:any;
  isButtonVisible1=true;
  isButtonVisible2=true;
  isButtonVisible3=true;
  seconds=60
  subscribeTimer: any;
  @Output() mistakeRemaining:Number=7;
  @Output() gameFinished = new EventEmitter<boolean>();
  @Output() timeLeft: number = 30;
  success: boolean = false;
// ----------------------
  
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

  }


  reset() {
    this.guesses = [];
    this.pickNewQuestion();
    this.gameService.timeLeft=30;;
    this.restartGamebtnShown = false;
    
  }

  pickNewQuestion(){
    const randomIndex =Math.floor(Math.random() * this.questions.length);
    this.question =this.questions[randomIndex];
    console.log(this.question);
  }
  onGameFinished(){
    this.restartGamebtnShown=true;
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


  
  startTimer(){
    this.gameDispaly.startTimer()
  }






}
  //----- timer --------------




