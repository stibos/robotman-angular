import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RunOverviewComponent} from "./pages/overview/run-overview.component";

const routes: Routes = [
  { path: '', component: RunOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotmanRunRoutingModule { }
