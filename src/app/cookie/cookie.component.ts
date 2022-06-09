import { Component, OnInit } from '@angular/core';
import {CookieService} from "./cookie.service";
import {Cookie} from "./Cookie";
import {Enigme} from "./Enigme";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  cookie?: Cookie;
  enigme?: Enigme;
  response?: string;
  showMessage?: boolean;
  facheck = faCheck;
  responseCorrect?: boolean;
  score: number = 10;

  constructor(private cookieService: CookieService, private router:Router) { }

  ngOnInit(): void {
    this.getCookie();
  }

  getCookie(){
    this.cookieService.getCookie().subscribe(c => {
      this.cookie = c;
      this.enigme = this.cookieService.createEnigme(c.quoteText!);
    });
  }

  checkResponse(){
    console.log("check response");
    this.responseCorrect = this.enigme?.missingWord?.toLowerCase() === this.response?.trim().toLowerCase();
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
      if(this.responseCorrect){
        this.nextEnigme();
      }
    }, 3000);
    if(this.responseCorrect){
      this.showResponse();
      this.score+=10;
      this.checkIfWon();
    } else {
      this.score-=5;
    }
    this.resetResponse();
  }

  showResponse(){
    console.log("show response");
    if(this.enigme && this.enigme.wisdom){
      this.enigme.wisdom = this.cookie?.quoteText;
    }
  }

  nextEnigme(){
    this.resetResponse();
    this.getCookie();
    this.responseCorrect = false;
    this.showMessage = false;
  }

  skip(){
    this.score -= 2;
    this.showResponse();
    setTimeout(() => this.nextEnigme(), 2000);
  }

  resetResponse(){
    this.response = '';
  }

  checkIfWon(){
    if(this.score >= 100){
      this.router.navigate(["win"]);
    }
    if(this.score < 0){
      this.router.navigate(["lose"]);
    }
  }
}
