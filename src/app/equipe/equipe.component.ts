import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Equipe} from "./model/Equipe";
import {EquipeService} from "./equipe.service";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  public equipes$: Observable<Equipe[]> = new BehaviorSubject([]);

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipes$ = this.equipeService.equipes$;
  }

}
