import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Equipe} from "./model/Equipe";
import {Member} from "./model/Member";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private _equipes: BehaviorSubject<any> = new BehaviorSubject([]);

  public  equipes$: Observable<Equipe[]> = this._equipes.asObservable();

  private _membres: BehaviorSubject<any> = new BehaviorSubject([]);

  public  membres$: Observable<Member[]> = this._membres.asObservable();

  constructor() { }

  addEquipe(equipe: Equipe){
    this._equipes.next([
      ...this._equipes.value,
      equipe
    ]);
  }

  addMember( member: Member, equipe?: Equipe){
    console.log(equipe);
    this._membres.next([...this._membres.value, member]);
    if(equipe){
      console.log("Equipe est renseigné", equipe);
      equipe.members.push(member);
      this._equipes.next([
        ...this._equipes.value.filter((e: Equipe) => e.name !== equipe.name),
        equipe
      ]);
    }
  }

  deleteMember(index: number){
    const updMembers = [...this._membres.value];
    updMembers.splice(index, 1);
    this._membres.next(updMembers);
  }

  deleteEquipe(index:number){
    const updEquipes = [...this._equipes.value];
    updEquipes.splice(index, 1);
    this._equipes.next(updEquipes);
  }

}
