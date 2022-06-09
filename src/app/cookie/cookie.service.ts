import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of, retry} from "rxjs";
import {Cookie} from "./Cookie";
import {Enigme} from "./Enigme";

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private httpClient: HttpClient) { }

  public createEnigme(phrase: string): Enigme {
    const splitPhrase = phrase.split(/[;,\\.:-]? /g);
    const longWords = splitPhrase.filter(w => w.length >= 5);
    const random = Math.floor(Math.random() * longWords.length);
    const missingWord = longWords[random].trim().replace(/[$@%,\.]/g, '');
    phrase = phrase.replace(missingWord, new Array(missingWord.length + 1).join('_ '));
    return new Enigme(phrase, longWords[random]);
  }

  public getCookie(){
    return this.httpClient.get<Cookie>("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&json=parseQuote",
      {
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            }
          }).pipe(retry(1));
  }

  public cleanString(){

  }
}
