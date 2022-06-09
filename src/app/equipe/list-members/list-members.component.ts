import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Equipe} from "../model/Equipe";
import {EquipeService} from "../equipe.service";
import {Member} from "../model/Member";
import {faEraser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent implements OnInit {

  public members$: Observable<Member[]> = new BehaviorSubject([]);
  public faEraser = faEraser;

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.members$ = this.equipeService.membres$;
  }

  deleteMember(index:number){
    this.equipeService.deleteMember(index);
  }

}
