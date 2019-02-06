import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FoobarFiveComponent } from './foobar-five.component';

describe('FoobarFiveComponent', () => {
  let component: FoobarFiveComponent;
  let fixture: ComponentFixture<FoobarFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FoobarFiveComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoobarFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
