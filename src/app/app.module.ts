import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImcComponent } from './imc/imc.component';
import { EssenceComponent } from './essence/essence.component';
import {FormsModule} from "@angular/forms";
import { EquipeComponent } from './equipe/equipe.component';
import { NewTeamComponent } from './equipe/new-team/new-team.component';
import { NewMemberComponent } from './equipe/new-member/new-member.component';
import { ListMembersComponent } from './equipe/list-members/list-members.component';
import { ListTeamsComponent } from './equipe/list-teams/list-teams.component';
import { MaisonComponent } from './maison/maison.component';
import { CookieComponent } from './cookie/cookie.component';
import {HttpClientModule} from "@angular/common/http";
import { WinComponent } from './cookie/win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    ImcComponent,
    EssenceComponent,
    EquipeComponent,
    NewTeamComponent,
    NewMemberComponent,
    ListMembersComponent,
    ListTeamsComponent,
    MaisonComponent,
    CookieComponent,
    WinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
