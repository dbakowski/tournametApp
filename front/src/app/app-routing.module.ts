import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersComponent} from "./players/players.component";
import {TeamsComponent} from "./teams/teams.component";
import {BracketComponent} from "./bracket/bracket.component";
import {MapChoosingComponent} from "./map-choosing/map-choosing.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'players/:category/:query', component: PlayersComponent},
  {path: 'players/search/:category/:query', component: PlayersComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/:category/:query', component: TeamsComponent},
  {path: 'teams/search/:category/:query', component: TeamsComponent},
  {path: 'bracket', component: BracketComponent},
  {path: 'map-choosing', component: MapChoosingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
