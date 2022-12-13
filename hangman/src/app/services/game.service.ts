import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';


const defaultJSONPath= 'assets/languages.json';



@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http:HttpClient) { }

  getQuestions(jsonPath:string =defaultJSONPath ){
    return this.http.get<{category:string , items:string[]}>(jsonPath)
  }

  

  
}
