import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomarkDialogComponent } from './infomark-dialog.component';

describe('InfomarkDialogComponent', () => {
  let component: InfomarkDialogComponent;
  let fixture: ComponentFixture<InfomarkDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfomarkDialogComponent]
    });
    fixture = TestBed.createComponent(InfomarkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
