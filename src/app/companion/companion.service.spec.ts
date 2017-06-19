import { TestBed, inject } from '@angular/core/testing';

import { CompanionService } from './companion.service';

describe('CompanionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanionService]
    });
  });

  it('should be created', inject([CompanionService], (service: CompanionService) => {
    expect(service).toBeTruthy();
  }));
});
