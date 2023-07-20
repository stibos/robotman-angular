import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild
} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";
import {BaseComponent} from "../../robotman-common/component/base.component";

@Component({
  selector: 'rman-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('iconContainer') iconContainer!: ElementRef;

  @Input()
  icon = '';

  @Input()
  label: string = '';

  @Input()
  labelKey: string = '';

  constructor(private readonly translateService: TranslateService) {
    super();
  }

  ngAfterViewInit() {
    let label = this.label;
    if (this.labelKey) {
      label = this.translateService.instant(this.labelKey);
    }
    if (label) {
      this.iconContainer.nativeElement.setAttribute('label', label);
    }
  }

}
