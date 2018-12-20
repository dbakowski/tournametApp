import { Component } from '@angular/core';
import {GlobalsService} from "./globals.service";
import {Title} from "@angular/platform-browser";
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    GlobalsService
  ]
})
export class AppComponent {
  public appname: string = this.globals.appname;

  //TODO: make responsive
  ngOnInit(){
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }

  constructor(private globals: GlobalsService, private titleService: Title){
    this.titleService.setTitle(globals.appname)
  }
}
