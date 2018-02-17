import { TestBed, inject } from '@angular/core/testing';

import { MfClientDataService } from './mf-client-data.service';

describe('MfClientDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MfClientDataService]
    });
  });

  it('should be created', inject([MfClientDataService], (service: MfClientDataService) => {
    expect(service).toBeTruthy();
  }));
});
