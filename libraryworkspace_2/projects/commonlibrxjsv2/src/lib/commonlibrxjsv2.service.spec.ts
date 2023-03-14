import { TestBed } from '@angular/core/testing';

import { Commonlibrxjsv2Service } from './commonlibrxjsv2.service';

describe('Commonlibrxjsv2Service', () => {
  let service: Commonlibrxjsv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Commonlibrxjsv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
