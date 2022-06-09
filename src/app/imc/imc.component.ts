import { Component, OnInit } from '@angular/core';
import {IMC_INTERPRETATIONS} from "../consts/imcInterpretations";

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent implements OnInit {

  poids: number = 0;
  taille: number = 0;
  imc?: number;
  message?: string;
  color?: string;

  constructor() { }

  ngOnInit(): void {
  }

  calculerImc(){
    if(this.poids && this.taille){
      const tmp = this.poids / (this.taille/100 * this.taille/100);
      this.imc = Math.round(tmp * 100) / 100;
      this.getMessage();
    }
  }

  private getMessage(){
    const grade = IMC_INTERPRETATIONS.find(i => this.imc! >= i.minIMC && this.imc! <= i.maxIMC);
    if(grade){
      this.message = grade!.message;
      this.color = grade!.color;
    }
  }

  private resetValues(){
    this.poids = 0;
    this.taille = 0;
  }

}
