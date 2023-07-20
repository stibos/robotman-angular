import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TreeModule} from "@circlon/angular-tree-component";
import {TranslateModule} from "@ngx-translate/core";
import {BaseComponent} from "../../robotman-common/component/base.component";

@Component({
  selector: 'tree',
  template: `
    <tree-root [focused]="true" [nodes]="nodes"></tree-root>
    <br>
    <p>Keys:</p>
    down | up | left | right | space | enter
  `,
  styles: [],
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
export class TreeComponent extends BaseComponent {
  nodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
            {name: 'grandchild2.2.1'}
          ] }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];
}
