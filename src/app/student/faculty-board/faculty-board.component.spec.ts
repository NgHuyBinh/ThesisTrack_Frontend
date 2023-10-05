import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyBoardComponent } from './faculty-board.component';

describe('FacultyBoardComponent', () => {
  let component: FacultyBoardComponent;
  let fixture: ComponentFixture<FacultyBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyBoardComponent]
    });
    fixture = TestBed.createComponent(FacultyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
