import {IconComponent} from "./icon.component";
import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {TranslateService} from "@ngx-translate/core";
import {MockTranslateService} from "../../robotman-common/spec/mock-translate.service";
import {By} from "@angular/platform-browser";


describe('IconComponent', () => {

  let sut: IconComponent;
  const translateService = new MockTranslateService()
  let fixture: ComponentFixture<IconComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        IconComponent,
        { provide: TranslateService, useValue: translateService }
      ]
    });

    spyOn(translateService, 'instant')
      .withArgs('test-icon-label-key').and.returnValue('test-icon-label-key-translated');

    fixture = TestBed.createComponent(IconComponent);
    sut = fixture.componentInstance;
    sut.id = 'test-icon';
    sut.icon = 'test-icon-class';
    sut.label = 'test-icon-label';
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(sut).toBeTruthy();
  });

  it('should use the provided id', () => {
    expect(fixture.debugElement.query(By.css(`#${sut.id}`)).nativeElement).toBeTruthy();
  });

  it('should use the provided icon class', () => {
    expect(fixture.debugElement.query(By.css(`.${sut.icon}`)).nativeElement).toBeTruthy();
  });

  it('should use the provided label', () => {
    sut.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('.icon')).nativeElement;
    expect(element.getAttribute('label')).toEqual(sut.label);
  });

  it('should use the labelKey in a higher priority than the label', () => {
    sut.labelKey = 'test-icon-label-key';
    sut.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('.icon')).nativeElement;
    expect(element.getAttribute('label')).toEqual(translateService.instant(sut.labelKey));
  });

});
