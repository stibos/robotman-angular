import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigureAnalyzeComponent} from "./overview/configure-analyze.component";

const routes: Routes = [
  { path: '', component: ConfigureAnalyzeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotmanAnalyzeRoutingModule { }
