import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../model/Member";
import {Equipe} from "../model/Equipe";
import {EquipeService} from "../equipe.service";

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit {

  @Input() equipes?: Equipe[] | null;
  newMember: Member = new Member();
  group?: Equipe;

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
  }

  addMember(){
    console.log(this.group);
    this.equipeService.addMember(this.newMember, this.group);
    this.resetFields();
  }

  private resetFields(){
    this.newMember = new Member();
    this.group = undefined;
  }
}
