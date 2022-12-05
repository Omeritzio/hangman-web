import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private router: Router) {

  }
  
  isButtonVisible1= true;
  isButtonVisible2= true;

  easy:string[] =["banna", "apple", "iphone", "keyboard", "javascript", "gaming", "network"];
  
  randomValue:string = this.easy[Math.floor(Math.random() * this.easy.length)];

  myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
  'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

  gotoEasy():any{
    this.router.navigateByUrl('/easy');
  }


}



 
