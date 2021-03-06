import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get('http://localhost:1337/articles');
  }

  getMatches() {
    return this.http.get('http://localhost:1337/matches');
  }

  getPlayers(params) {
    return params.params.category && params.params.query
      ? this.http.get('http://localhost:1337/players/' + params.params.category + '/' + params.params.query)
      : this.http.get('http://localhost:1337/players')
  }

  getTeams(params) {
    return params.params.category && params.params.query
      ? this.http.get('http://localhost:1337/teams/' + params.params.category + '/' + params.params.query)
      : this.http.get('http://localhost:1337/teams')
  }
}
