import { TestBed } from '@angular/core/testing';

import { CallHistoryService } from './callhistory.service';

describe('CallhistoryService', () => {
  let service: CallHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
