/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InsertService } from './insert.service';

describe('Service: Insert', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertService]
    });
  });

  it('should ...', inject([InsertService], (service: InsertService) => {
    expect(service).toBeTruthy();
  }));
});
