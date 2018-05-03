import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { NavService } from "./services/nav.service";
import { TvMazeService } from "./services/tv-maze.service";
import { ResultsComponent } from "./results/results.component";
import { AppRoutingModule } from ".//app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchbarComponent,
    ResultsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
  providers: [NavService, TvMazeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
