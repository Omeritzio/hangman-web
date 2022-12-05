import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EasyComponent } from './easy/easy.component';
import { HardComponent } from './hard/hard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EasyComponent,
    HardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
