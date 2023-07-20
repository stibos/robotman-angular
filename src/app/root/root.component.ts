import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'robotman-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  // @ts-ignore
  @ViewChild('content') content: any;

}
