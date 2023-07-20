import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {TranslateService} from "@ngx-translate/core";
import {MockTranslateService} from "../modules/robotman-common/spec/mock-translate.service";
import {NavbarComponent} from "./components/navbar/navbar.component";

describe('AppComponent', () => {

  let sut: AppComponent;
  const mockTranslateService = new MockTranslateService();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent
    ],
      providers: [
        { provide: TranslateService, useValue: mockTranslateService }
      ],
    }).compileComponents();

    spyOn(mockTranslateService, 'instant')
      .withArgs('app.title').and.returnValue('robotman-test');

    const fixture = TestBed.createComponent(AppComponent);
    sut = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(sut).toBeTruthy();
  });

  it(`should have as title 'robotman-test'`, () => {
    expect(document.title).toEqual('robotman-test');
  });

});
