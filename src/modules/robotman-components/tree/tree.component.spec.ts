import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {TreeComponent} from "./tree.component";


describe('TreeComponent', () => {

  let sut: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        TreeComponent
      ]
    });

    fixture = TestBed.createComponent(TreeComponent);
    sut = fixture.componentInstance;
    sut.id = 'test-tree';
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(sut).toBeTruthy();
  });

});
