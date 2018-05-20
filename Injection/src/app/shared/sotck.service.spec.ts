import { TestBed, inject } from '@angular/core/testing';

import { SotckService } from './sotck.service';

describe('SotckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SotckService]
    });
  });

  it('should be created', inject([SotckService], (service: SotckService) => {
    expect(service).toBeTruthy();
  }));
});
