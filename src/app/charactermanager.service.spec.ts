import { TestBed } from '@angular/core/testing';

import { CharactermanagerService } from './charactermanager.service';

describe('CharactermanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactermanagerService = TestBed.get(CharactermanagerService);
    expect(service).toBeTruthy();
  });
});
