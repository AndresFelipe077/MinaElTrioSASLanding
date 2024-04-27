import { TestBed } from '@angular/core/testing';

import { ThemeColorNumberService } from './theme-color-number.service';

describe('ThemeColorNumberService', () => {
  let service: ThemeColorNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeColorNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); // Service of spec
