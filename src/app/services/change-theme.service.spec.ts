/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeThemeService } from './change-theme.service';

describe('Service: ChangeTheme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeThemeService]
    });
  });

  it('should ...', inject([ChangeThemeService], (service: ChangeThemeService) => {
    expect(service).toBeTruthy();
  }));
});
