import { TestBed } from '@angular/core/testing';

import { SpellserviceService } from './spellservice.service';

describe('SpellserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellserviceService = TestBed.get(SpellserviceService);
    expect(service).toBeTruthy();
  });
});
