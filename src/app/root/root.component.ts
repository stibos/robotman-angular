import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {IconComponent} from "../../modules/robotman-components/icon/icon.component";

@Component({
  selector: 'robotman-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  // @ts-ignore
  @ViewChild('content') content: any;

}
