import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {ContentEditableComponent} from "./content-editable.component";


describe('ContentEditableComponent', () => {

  let sut: ContentEditableComponent;
  let fixture: ComponentFixture<ContentEditableComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentEditableComponent
      ]
    });

    fixture = TestBed.createComponent(ContentEditableComponent);
    sut = fixture.componentInstance;
    sut.id = 'test-content-editable';
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(sut).toBeTruthy();
  });

});
