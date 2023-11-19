import { TestBed } from '@angular/core/testing';

import { TeachingscheduleService } from './teachingschedule.service';

describe('TeachingscheduleService', () => {
  let service: TeachingscheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachingscheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
