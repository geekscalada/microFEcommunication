import { TestBed } from '@angular/core/testing';

import { CommonlibrxjsService } from './commonlibrxjs.service';

describe('CommonlibrxjsService', () => {
  let service: CommonlibrxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonlibrxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
