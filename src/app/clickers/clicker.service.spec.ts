import { TestBed, inject } from '@angular/core/testing';

import { ClickerService } from './clicker.service';

describe('ClickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClickerService]
    });
  });

  it('should be created', inject([ClickerService], (service: ClickerService) => {
    expect(service).toBeTruthy();
  }));
});
