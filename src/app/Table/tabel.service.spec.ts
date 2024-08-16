/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TabelService } from './tabel.service';

describe('Service: Tabel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabelService]
    });
  });

  it('should ...', inject([TabelService], (service: TabelService) => {
    expect(service).toBeTruthy();
  }));
});
