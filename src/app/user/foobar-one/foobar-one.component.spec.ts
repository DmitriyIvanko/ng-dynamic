import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FoobarOneComponent } from './foobar-one.component';

describe('FoobarOneComponent', () => {
  let component: FoobarOneComponent;
  let fixture: ComponentFixture<FoobarOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FoobarOneComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoobarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
