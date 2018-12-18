import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersComponent} from "./players/players.component";
import {TeamsComponent} from "./teams/teams.component";

const routes: Routes = [
  {path: 'players', component: PlayersComponent},
  {path: 'players/:category/:query', component: PlayersComponent},
  {path: 'players/:search/:category/:query', component: PlayersComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/:category/:query', component: TeamsComponent},
  {path: 'teams/search/:category/:query', component: TeamsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
