import { TestBed } from '@angular/core/testing';

import { Commonlib3Service } from './commonlib3.service';

describe('Commonlib3Service', () => {
  let service: Commonlib3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Commonlib3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
