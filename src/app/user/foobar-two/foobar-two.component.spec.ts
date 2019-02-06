import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FoobarTwoComponent } from './foobar-two.component';

describe('FoobarTwoComponent', () => {
  let component: FoobarTwoComponent;
  let fixture: ComponentFixture<FoobarTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FoobarTwoComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoobarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
