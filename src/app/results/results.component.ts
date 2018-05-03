import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavService } from "../services/nav.service";
import { TvMazeService } from "../services/tv-maze.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit, OnDestroy {
  shows: string;
  error: string;
  subscription;
  item: string;
  constructor(
    private navService: NavService,
    private tvMazeService: TvMazeService
  ) {}

  ngOnInit() {
    this.getQuery();
    this.searchFromNav();
  }

  getQuery() {
    this.subscription = this.navService.navItem.subscribe(
      item => (this.item = item),
      err => (this.error = err)
    );
  }

  searchFromNav() {
    if (this.item) {
      this.tvMazeService.search(this.item).subscribe(
        shows => {
          console.log(shows);
          this.shows = shows;
        },
        err => {
          console.log(err);
          this.error = <any>err;
        }
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
