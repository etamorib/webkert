/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateContentService } from './update-content.service';

describe('Service: UpdateContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateContentService]
    });
  });

  it('should ...', inject([UpdateContentService], (service: UpdateContentService) => {
    expect(service).toBeTruthy();
  }));
});
