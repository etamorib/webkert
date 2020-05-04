import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from '@angular/core';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    const sanitizedValue = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, value);
    return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedValue);
  }

}
