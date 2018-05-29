import { TestBed, inject } from '@angular/core/testing';

import { BootstrapNgModalService } from './bootstrap-ng-modal.service';

describe('BootstrapNgModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootstrapNgModalService]
    });
  });

  it('should be created', inject([BootstrapNgModalService], (service: BootstrapNgModalService) => {
    expect(service).toBeTruthy();
  }));
});
