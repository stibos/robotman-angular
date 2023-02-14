import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditorComponent} from './editor/editor.component';
import {FormsModule} from '@angular/forms';
import {TreeModule} from '@circlon/angular-tree-component';
import {TreeComponent} from './tree/tree.component';
import {IconComponent} from "./icon/icon.component";

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TreeComponent,
    DashboardComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TreeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
