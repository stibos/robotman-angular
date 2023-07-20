import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private title: Title,
              private readonly translateService: TranslateService) {
    this.title.setTitle(this.translateService.instant('app.title'));
  }
}
