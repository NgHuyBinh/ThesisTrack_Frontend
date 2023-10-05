import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ThesistrackApiService } from './thesistrack-api.service';

describe('ThesistrackApiService', () => {
  let service: ThesistrackApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ThesistrackApiService]
    });

    service = TestBed.inject(ThesistrackApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Thêm các unit test cho các phương thức trong service tương ứng với API
});
