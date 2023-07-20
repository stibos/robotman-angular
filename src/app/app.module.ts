import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RootComponent} from './root/root.component';
import {RobotmanCoreModule} from "../modules/robotman-core/robotman-core.module";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {appInitializerFactory} from "./app.initializer";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {IconComponent} from "../modules/robotman-components/icon/icon.component";
import {ContentEditableComponent} from "../modules/robotman-components/content-editable/content-editable.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RobotmanCoreModule,
    IconComponent,
    ContentEditableComponent

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
