import { TestBed } from '@angular/core/testing';

import { RxjsExemplosService } from './rxjs-exemplos.service';

describe('RxjsExemplosService', () => {
  let service: RxjsExemplosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsExemplosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
