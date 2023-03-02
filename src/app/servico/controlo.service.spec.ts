import { TestBed } from '@angular/core/testing';

import { ControloService } from './controlo.service';

describe('ControloService', () => {
  let service: ControloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
