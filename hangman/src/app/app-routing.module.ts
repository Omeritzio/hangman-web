import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';

// const routes: Routes = [
//   {path:'' , component:GameComponent},
// ];

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/components/game/game.component').then(m => m.GameComponent) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
