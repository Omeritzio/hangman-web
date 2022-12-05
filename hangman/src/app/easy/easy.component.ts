import { Component } from '@angular/core';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})
export class EasyComponent {
  
  alpha= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  easy:string[] =["banna", "apple", "iphone", "keyboard", "javascript", "gaming", "network"];
  randomValue:string = this.easy[Math.floor(Math.random() * this.easy.length)];

  }


