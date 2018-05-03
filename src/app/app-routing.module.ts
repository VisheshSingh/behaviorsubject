import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ResultsComponent } from "./results/results.component";

const app_routes: Routes = [
  { path: "", component: AppComponent },
  { path: "search", component: ResultsComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(app_routes)],
  declarations: []
})
export class AppRoutingModule {}
