import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DataService} from "../data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Object;
  searchForm: FormGroup;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      teamname: ['']
    });

    this.route.paramMap.subscribe(params => {
      this.dataService.getTeams(params).subscribe(data => {
        this.teams = data;
      });
    });

    this.route.queryParams.subscribe(params => {
      if(params.getTeamByName != null) {
        this.dataService.getTeams({
          params: {
            category: 'search/name',
            query: params.getTeamByName
          }
        }).subscribe(data => {
          this.teams = data;
        });
      }
    });
  }

  searchTeam(query){
    this.router.navigateByUrl('/teams?getTeamByName=' + query);
  }
}
