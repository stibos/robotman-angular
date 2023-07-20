import {NgModule} from '@angular/core';
import {RobotmanCoreModule} from "../robotman-core/robotman-core.module";
import {ConfigureOverviewComponent} from "./overview/configure-overview.component";
import {RobotmanConfigureRoutingModule} from "./robotman-configure-routing.module";

@NgModule({
  declarations: [
    ConfigureOverviewComponent
  ],
  imports: [
    RobotmanCoreModule,
    RobotmanConfigureRoutingModule
  ],
  exports: [],
  providers: [],
})
export class RobotmanConfigureModule { }
