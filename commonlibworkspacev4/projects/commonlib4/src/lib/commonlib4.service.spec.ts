import { TestBed } from '@angular/core/testing';

import { Commonlib4Service } from './commonlib4.service';

describe('Commonlib4Service', () => {
  let service: Commonlib4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Commonlib4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
