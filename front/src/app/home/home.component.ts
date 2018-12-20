import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Object;

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    this.dataService.getArticles().subscribe(data => {
      this.articles = data[0];
    });
  }

}
