import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Markstudent2Component } from './markstudent2.component';

describe('Markstudent2Component', () => {
  let component: Markstudent2Component;
  let fixture: ComponentFixture<Markstudent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Markstudent2Component]
    });
    fixture = TestBed.createComponent(Markstudent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
