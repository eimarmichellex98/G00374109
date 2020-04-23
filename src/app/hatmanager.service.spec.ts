import { TestBed } from '@angular/core/testing';

import { HatmanagerService } from './hatmanager.service';

describe('HatmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HatmanagerService = TestBed.get(HatmanagerService);
    expect(service).toBeTruthy();
  });
});
