import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Object;
  searchForm: FormGroup;
  isIndex: boolean;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      nickname: ['']
    });

    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.isIndex = !params.params.category && !params.params.query;

      this.dataService.getPlayers(params).subscribe(data => {
        this.players = data;
      });
    });

    this.route.queryParams.subscribe(params => {
      if (params.getUserByName != null) {
        this.dataService.getPlayers({
          params: {
            category: 'search/nickname',
            query: params.getUserByName
          }
        }).subscribe(data => {
          this.players = data;
        });
      }
    });
  }

  searchPlayer(query) {
    this.router.navigateByUrl('/players?getUserByName=' + query);
  }
}
