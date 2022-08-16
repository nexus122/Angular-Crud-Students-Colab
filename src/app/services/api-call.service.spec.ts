import { TestBed } from '@angular/core/testing';
import Student from '../models/Student';
import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  let service: ApiCallService<Student>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
