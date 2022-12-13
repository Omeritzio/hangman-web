import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { GameComponent } from './components/game/game.component';
import { GameDispalyComponent } from './components/game-dispaly/game-dispaly.component';
import { GameKeyboardComponent } from './components/game-keyboard/game-keyboard.component';
import { GameQuestionComponent } from './components/game-question/game-question.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameDispalyComponent,
    GameKeyboardComponent,
    GameQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,

  
    
  ],
  providers: [GameDispalyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
