import { TestBed } from '@angular/core/testing';

import { ServiceRegionService } from './service-region.service';

describe('ServiceRegionService', () => {
  let service: ServiceRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
