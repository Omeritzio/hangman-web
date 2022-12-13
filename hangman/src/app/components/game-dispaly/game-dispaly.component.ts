import { Component, Input, OnChanges, OnInit, SimpleChanges, Output,EventEmitter, } from '@angular/core';
import { timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-dispaly',
  templateUrl: './game-dispaly.component.html',
  styleUrls: ['./game-dispaly.component.scss']
})

@Injectable({
  providedIn: 'root'
})


export class GameDispalyComponent implements OnInit,OnChanges {
  @Input() guesses: string[] = [];
  @Input() question: string = '';
  @Output() gameFinished = new EventEmitter<boolean>();
  MAX_MISTAKES = 7;
  @Output() mistakesRemaining;
  success: boolean = false;
  subscribeTimer: any;
  @Output() interval:any;

  @Output() timeLeft: number = 30;

  constructor() {
    this.mistakesRemaining = this.MAX_MISTAKES;
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes?.['question']?.currentValue &&
      changes?.['question'].currentValue !== changes?.['question'].previousValue
    ) {
      this.mistakesRemaining = this.MAX_MISTAKES;
      this.success = false;
    }
    const guessesCurrentValue = changes?.['guesses']?.currentValue;
    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue !== changes['guesses'].previousValue
    ) {
      const char = [...guessesCurrentValue].pop();
      this.checkGuess(char);
    }
  }

  checkGuess(letter: string) {
    let didWin = true;
    this.mistakesRemaining -= this.wasGuessAMistake(letter);
    for (let i = 0; i < this.question.length; i++) {
      if (
        !this.guesses.find(
          (guess) => guess.toLowerCase() === this.question[i].toLowerCase()
        )
      ) {
        didWin = false;
        break;
      }
    }
    this.success = didWin;
    if (this.success || this.mistakesRemaining === 0) {
      this.gameFinished.emit(this.success);
    }
  }

  wasGuessAMistake(letter: string) {
    for (let i = 0; i < this.question.length; i++) {
      if (this.question[i].toLowerCase() === letter.toLowerCase()) {
        return 0;
      }
    }
    return 1;
  }


  
oberserableTimer() {
  const source = timer(1000, 2000);
  const abc = source.subscribe(val => {
    console.log(val, '-');
    this.subscribeTimer = this.timeLeft - val;
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
      }
    },1000)
    
  }

pauseTimer() {
  clearInterval(this.interval);
}



  ngOnInit(): void {


  }

}
  


