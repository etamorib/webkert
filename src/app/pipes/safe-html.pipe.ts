import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(value: any, args?: any): any {
    console.log('SAFE HTML!');
    const ret = this.sanitizer.sanitize(SecurityContext.HTML, value);
    //const sanitizedContent = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustUrl(value));
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
