import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPlayers().subscribe(data => {
      this.players = data;
      console.log(data);
    })
  }

}
