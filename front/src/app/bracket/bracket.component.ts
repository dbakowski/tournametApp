import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {
  parsedMatches: Object = [];

  constructor(
    private dataService: DataService,
  ) {
  }


  ngOnInit() {
    this.dataService.getMatches().subscribe(data => {
      let matchesLen = Object.keys(data).length;
      //TODO: Paskudne, do zmiany...

      for (let i = 0; i < matchesLen; ++i) {
        if (data[i]) {
          this.parsedMatches[data[i].no] = data[i];
        }
      }
    });
  }

}
