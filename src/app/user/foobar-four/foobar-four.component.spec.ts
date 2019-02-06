import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FoobarFourComponent } from './foobar-four.component';

describe('FoobarFourComponent', () => {
  let component: FoobarFourComponent;
  let fixture: ComponentFixture<FoobarFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FoobarFourComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoobarFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
