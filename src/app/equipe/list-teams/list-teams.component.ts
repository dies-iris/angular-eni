import {Component, Input, OnInit} from '@angular/core';
import {faEraser} from "@fortawesome/free-solid-svg-icons";
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.scss']
})
export class ListTeamsComponent implements OnInit {

  @Input() equipes: any;
  public faEraser = faEraser;

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
  }

  deleteEquipe(index:number){
    this.equipeService.deleteEquipe(index);
  }

}
