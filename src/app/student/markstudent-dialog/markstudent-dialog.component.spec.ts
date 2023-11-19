import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkstudentDialogComponent } from './markstudent-dialog.component';

describe('MarkstudentDialogComponent', () => {
  let component: MarkstudentDialogComponent;
  let fixture: ComponentFixture<MarkstudentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkstudentDialogComponent]
    });
    fixture = TestBed.createComponent(MarkstudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
