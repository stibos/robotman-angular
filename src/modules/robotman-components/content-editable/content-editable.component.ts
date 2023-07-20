import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TreeModule} from "@circlon/angular-tree-component";
import {TranslateModule} from "@ngx-translate/core";
import {BaseComponent} from "../../robotman-common/component/base.component";

@Component({
  selector: 'robotman-content-editable',
  templateUrl: './content-editable.component.html',
  styleUrls: ['./content-editable.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    TreeModule,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentEditableComponent extends BaseComponent {

  constructor() {
    super();
  }

}
