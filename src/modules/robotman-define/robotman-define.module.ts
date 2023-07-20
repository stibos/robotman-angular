import {NgModule} from '@angular/core';
import {RobotmanCoreModule} from "../robotman-core/robotman-core.module";
import {DefineOverviewComponent} from "./overview/define-overview.component";
import {RobotmanDefineRoutingModule} from "./robotman-define-routing.module";
import {IconComponent} from "../robotman-components/icon/icon.component";

@NgModule({
  declarations: [
    DefineOverviewComponent
  ],
  imports: [
    RobotmanCoreModule,
    RobotmanDefineRoutingModule,
    IconComponent
  ],
  exports: [
  ],
  providers: []
})
export class RobotmanDefineModule { }
