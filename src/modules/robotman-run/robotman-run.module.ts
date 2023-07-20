import {NgModule} from '@angular/core';
import {RobotmanCoreModule} from "../robotman-core/robotman-core.module";
import {RunOverviewComponent} from "./pages/overview/run-overview.component";
import {RobotmanRunRoutingModule} from "./robotman-run-routing.module";

@NgModule({
  declarations: [
    RunOverviewComponent
  ],
  imports: [
    RobotmanCoreModule,
    RobotmanRunRoutingModule
  ],
  exports: [],
  providers: [],
})
export class RobotmanRunModule { }
