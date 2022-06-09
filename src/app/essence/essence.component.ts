import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrls: ['./essence.component.scss']
})
export class EssenceComponent implements OnInit {

  distance?:number;
  essence?:number;
  result?: string;

  constructor() { }

  ngOnInit(): void {
  }

  calculerEssence(){
    if(this.distance && this.essence){
      this.result = ((this.essence! * 100) / this.distance!).toFixed(2);
    }
  }
}
