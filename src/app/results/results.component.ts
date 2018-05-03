import { Component, OnInit, OnDestroy } from "@angular/core";

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
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
