import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImcComponent} from "./imc/imc.component";
import {EssenceComponent} from "./essence/essence.component";
import {EquipeComponent} from "./equipe/equipe.component";
import {MaisonComponent} from "./maison/maison.component";
import {CookieComponent} from "./cookie/cookie.component";
import {WinComponent} from "./cookie/win/win.component";

const routes: Routes = [
  {
    path: "imc", component: ImcComponent
  },
  {
    path: "essence", component: EssenceComponent
  },
  {
    path: "equipe", component: EquipeComponent
  },
  {
    path: "maison-connectee", component: MaisonComponent
  },
  {
    path: "win", component: WinComponent
  },
  {
    path: "lose", component: WinComponent
  },
  {
    path: "", pathMatch: 'full', component: CookieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
