import { TestBed } from '@angular/core/testing';

import { HousemanagerService } from './housemanager.service';

describe('HousemanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HousemanagerService = TestBed.get(HousemanagerService);
    expect(service).toBeTruthy();
  });
});
