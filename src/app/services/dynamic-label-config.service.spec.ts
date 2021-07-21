import { TestBed } from '@angular/core/testing';

import { DynamicLabelConfigService } from './dynamic-label-config.service';

describe('DynamicLabelConfigService', () => {
  let service: DynamicLabelConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicLabelConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
