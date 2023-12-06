import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Markstudent1Component } from './markstudent1.component';

describe('Markstudent1Component', () => {
  let component: Markstudent1Component;
  let fixture: ComponentFixture<Markstudent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Markstudent1Component]
    });
    fixture = TestBed.createComponent(Markstudent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
