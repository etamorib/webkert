import { UpdateContentService } from './../services/update-content.service';
import { Component, OnInit, SecurityContext, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit, OnDestroy {
  value = '';
  private subscription: Subscription;
  constructor(private _updateService: UpdateContentService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.subscription = this._updateService.update$.subscribe(
      content => {
        this.value = content;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
