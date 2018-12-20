import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-choosing',
  templateUrl: './map-choosing.component.html',
  styleUrls: ['./map-choosing.component.scss']
})
export class MapChoosingComponent implements OnInit {
  isInfernoBanned: boolean = false;
  isTrainBanned: boolean = false;
  isMirageBanned: boolean = false;
  isNukeBanned: boolean = false;
  isOverpassBanned: boolean = false;
  isCacheBanned: boolean = false;
  isDust2Banned: boolean = false;
  bannedMapsCount: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  public banMap(mapName) {
    switch (mapName) {
      case 'inferno': {
        if (!this.isInfernoBanned && this.bannedMapsCount < 6) {
          this.isInfernoBanned = true;
          ++this.bannedMapsCount;
        } else {

        }
        break;
      }

      case 'train': {
        if (!this.isTrainBanned && this.bannedMapsCount < 6) {
          this.isTrainBanned = true;
          ++this.bannedMapsCount;
        }
        break;
      }

      case 'mirage': {
        if (!this.isMirageBanned && this.bannedMapsCount < 6) {
          this.isMirageBanned = true;
          ++this.bannedMapsCount;
        }
        break;
      }

      case 'nuke': {
        if (!this.isNukeBanned && this.bannedMapsCount < 6) {
          this.isNukeBanned = true;
          ++this.bannedMapsCount;
        }
        break;
      }

      case 'overpass': {
        if (!this.isOverpassBanned && this.bannedMapsCount < 6) {
          this.isOverpassBanned = true;
          ++this.bannedMapsCount;
        }
        break;
      }

      case 'cache': {
        if (!this.isCacheBanned && this.bannedMapsCount < 6) {
          this.isCacheBanned = true;
          ++this.bannedMapsCount;
        }
        break;
      }

      case 'dust2': {
        if (!this.isDust2Banned && this.bannedMapsCount < 6) {
          this.isDust2Banned = true;
          ++this.bannedMapsCount;
        }
        break;
      }
    }

    if (this.bannedMapsCount == 6){
      this.showChosenMap();
    }
  }

  private showChosenMap() {
    let map = '';

    if (!this.isInfernoBanned) {
      map = 'inferno';
    }

    if (!this.isTrainBanned) {
      map = 'train';
    }

    if (!this.isMirageBanned) {
      map = 'mirage';
    }

    if (!this.isNukeBanned) {
      map = 'nuke';
    }

    if (!this.isOverpassBanned) {
      map = 'overpass';
    }

    if (!this.isCacheBanned) {
      map = 'cache';
    }

    if (!this.isDust2Banned) {
      map = 'dust2';
    }

    this.displayChosenMapInView(map);
  }

  private displayChosenMapInView(mapClassName) {
    // @ts-ignore
    let bgSrc = document.querySelector('.' + mapClassName + ' .map img').src;
    let mapDisplay = document.querySelector('#map-display');
    // @ts-ignore
    mapDisplay.style.backgroundImage = 'url(' + bgSrc + ')';
    // @ts-ignore
    mapDisplay.style.opacity = 0.3;
  }
}
