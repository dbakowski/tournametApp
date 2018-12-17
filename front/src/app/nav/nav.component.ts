import { Component, OnInit } from '@angular/core';
import { GlobalsService } from "../globals.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [
    GlobalsService
  ]
})
export class NavComponent implements OnInit {

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
  }

}
