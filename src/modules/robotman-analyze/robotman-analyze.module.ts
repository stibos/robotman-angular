import {NgModule} from '@angular/core';
import {RobotmanCoreModule} from "../robotman-core/robotman-core.module";
import {ConfigureAnalyzeComponent} from "./overview/configure-analyze.component";
import {RobotmanAnalyzeRoutingModule} from "./robotman-analyze-routing.module";

@NgModule({
  declarations: [
    ConfigureAnalyzeComponent
  ],
  imports: [
    RobotmanCoreModule,
    RobotmanAnalyzeRoutingModule
  ],
  exports: [],
  providers: [],
})
export class RobotmanAnalyzeModule { }
