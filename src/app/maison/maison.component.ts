import { Component, OnInit } from '@angular/core';
import {Appareil} from "./Appareil";

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.scss']
})
export class MaisonComponent implements OnInit {

  public appareils: Appareil[] = [new Appareil("PS4"), new Appareil("Télé"), new Appareil("Machine à café")];
  constructor() { }

  ngOnInit(): void {
  }

  public toutAllumer(allumer: boolean){
    this.appareils.forEach(a => a.isOn = allumer);
  }
}
