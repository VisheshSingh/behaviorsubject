import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { UrlHandlingStrategy } from "@angular/router";

@Injectable()
export class TvMazeService {
  private _tvMazeURL: string = "https://api.tvmaze.com/search/shows";
  constructor(private http: Http) {}

  search(query: any): Observable<any> {
    const search: URLSearchParams = new URLSearchParams();
    search.set("q", query);

    return this.http
      .get(this._tvMazeURL, { search })
      .map(res => res.json)
      .do(data => console.log(data));
  }
}
