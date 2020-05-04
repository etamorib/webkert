import { UpdateContentService } from './../services/update-content.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  value = '';
  constructor(private _updateService: UpdateContentService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._updateService.update$.subscribe(
      content => {
        //this.value = this.sanitizer.bypassSecurityTrustHtml(content);
        //console.log(this.value);
        this.value = content;
      }
    );
  }

}
