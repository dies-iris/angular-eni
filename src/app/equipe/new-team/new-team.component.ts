import { Component, OnInit } from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {EquipeService} from "../equipe.service";
import {Equipe} from "../model/Equipe";

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {

  equipeName?: string;
  faplus = faPlus;

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
  }

  addGroup(){
    if(!!this.equipeName){
      this.equipeService.addEquipe(new Equipe(this.equipeName!));
      this.resetFields();
    }
  }

  private resetFields(){
    this.equipeName = '';
  }
}
