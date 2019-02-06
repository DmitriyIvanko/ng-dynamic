import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FoobarThreeComponent } from './foobar-three.component';

describe('FoobarThreeComponent', () => {
  let component: FoobarThreeComponent;
  let fixture: ComponentFixture<FoobarThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FoobarThreeComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoobarThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
