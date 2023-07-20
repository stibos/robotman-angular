import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigureOverviewComponent} from "./overview/configure-overview.component";

const routes: Routes = [
  { path: '', component: ConfigureOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotmanConfigureRoutingModule { }
