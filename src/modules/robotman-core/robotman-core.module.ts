import {NgModule} from '@angular/core';
import {CoreConfigurationService} from "./configuration/core-configuration.service";
import {CoreContextService} from "./context/core-context.service";
import {CoreLogService} from "./log/core-log.service";
import {CoreUserService} from "./security/core-user.service";
import {CoreTranslateService} from "./translate/core-translate.service";

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    CoreConfigurationService,
    CoreContextService,
    CoreLogService,
    CoreUserService,
    CoreTranslateService
  ],
})
export class RobotmanCoreModule { }
