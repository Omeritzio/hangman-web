import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {path:'' , component:GameComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
