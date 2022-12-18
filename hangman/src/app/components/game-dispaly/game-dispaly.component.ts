import { Component, Input, OnChanges, OnInit, SimpleChanges, Output,EventEmitter, } from '@angular/core';
import { timer } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-game-dispaly',
  templateUrl: './game-dispaly.component.html',
  styleUrls: ['./game-dispaly.component.scss']
})

@Injectable({
  providedIn: 'root'
})


export class GameDispalyComponent implements OnInit,OnChanges {

  // ----The inputs that this component gives------
  @Input() guesses: string[] = [];
  @Input() question: string = '';
  @Output() gameFinished = new EventEmitter<boolean>();
  MAX_MISTAKES = 7;
  @Input() mistakesRemaining;
  @Input() success: boolean = false;
  subscribeTimer: any;
  @Input() interval:any;
  @Input() timeLeft: number = 30;



 // ----The constructor make sure that the mistakes Remaining will start with max mistakes ------
  constructor() {
    this.mistakesRemaining = this.MAX_MISTAKES;
    
  }
// ----Check if the characters that we gives are correct ------
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
// ----Check if the characters that we gives are correct  and we guessed all the word correctly and won------
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
// ----Check if the characters that we gives are wrong -----
  wasGuessAMistake(letter: string) {
    for (let i = 0; i < this.question.length; i++) {
      if (this.question[i].toLowerCase() === letter.toLowerCase()) {
        return 0;
      }
    }
    return 1;
  }





  ngOnInit(): void {

    
  }

}
  


