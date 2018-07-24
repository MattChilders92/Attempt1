import { TestBed, inject } from '@angular/core/testing';

import { GdaxService } from './gdax.service';

describe('GdaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GdaxService]
    });
  });

  it('should be created', inject([GdaxService], (service: GdaxService) => {
    expect(service).toBeTruthy();
  }));
});
