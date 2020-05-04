import { UpdateContentService } from './../services/update-content.service';
import { Component, Input, ViewChild } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: [ './code-area.component.css' ]
})
export class CodeAreaComponent  {
  @ViewChild('editor') editor;
  @Input() code: string;
  options = {
    lineNumbers: true,
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  value = '';

  constructor(private _updateService: UpdateContentService) {}

  onCodeChanged(value) {
    //let str = value.replace(/^[-\d\s]*/, '');
    //console.log('CODE:', str);
    console.log(this.editor.editorContent.nativeElement.ownerDocument.activeElement.selectionStart);
    let startPos = this.editor.editorContent.nativeElement.ownerDocument.activeElement.selectionStart;
    let endPos = this.editor.editorContent.nativeElement.ownerDocument.activeElement.selectionEnd;
    let str='';
    str = str.substring(0, startPos) + value + str.substring(endPos, str.length);
    this._updateService.sendContent(str);
    console.log('s:', str);
  }

}
