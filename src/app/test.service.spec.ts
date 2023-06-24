import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('tseting first service', () => {
    expect(service.getTestVale()).toBe('Wellcom in this service');
    expect(typeof service.getTestVale()).toEqual('string')
  });
});
