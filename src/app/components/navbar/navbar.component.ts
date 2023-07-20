import {Component} from "@angular/core";
import {NAVBAR_MODEL} from "./navbar.model";

@Component({
  selector: 'rman-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  model = NAVBAR_MODEL;
  activeItemId = 'feature.define';

}
