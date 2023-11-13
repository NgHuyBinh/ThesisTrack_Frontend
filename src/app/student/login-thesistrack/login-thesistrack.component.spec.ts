import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginThesistrackComponent } from './login-thesistrack.component';

describe('LoginThesistrackComponent', () => {
  let component: LoginThesistrackComponent;
  let fixture: ComponentFixture<LoginThesistrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginThesistrackComponent]
    });
    fixture = TestBed.createComponent(LoginThesistrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
