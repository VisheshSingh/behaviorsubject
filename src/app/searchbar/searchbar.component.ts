import { Component, OnInit } from "@angular/core";
import { NavService } from "../services/nav.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent implements OnInit {
  query: string;
  constructor(private navService: NavService, private router: Router) {}

  ngOnInit() {}

  search() {
    console.log(this.query);
    this.navService.changeNav(this.query);
    this.query = "";
    this.router.navigate(["/search"]);
  }
}
