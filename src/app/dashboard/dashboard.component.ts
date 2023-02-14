import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  // @ts-ignore
  @ViewChild('content') content: any;

  bla = '*** keywords ***';

  inputChanged() {
    console.log(this.content.nativeElement.innerText)
  }
}
