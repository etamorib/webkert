import { UpdateContentService } from './../services/update-content.service';
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { defaults } from 'codemirror';

@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: [ './code-area.component.css' ]
})
export class CodeAreaComponent implements OnInit  {
  @ViewChild('editor') editor;
  @Input() code: string;
  codeMirrorOptions: any = {
    theme: 'idea',
    htmlMode : true,
    lineNumbers: true,
    lineWrapping: true,
    readOnly: false,
    autoFocus: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  obj;

  ngOnInit(){
    this.obj= JSON.stringify({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "title": "Object",
      "additionalProperties": false,
      "properties": {
        "string": {
          "type": "string",
          "title": "String"
        }
      }
    }, null, ' ');
  }


  constructor(private _updateService: UpdateContentService) {}

  onCodeChanged(value) {
    //let str = value.replace(/^[-\d\s]*/, '');
    //console.log('CODE:', str);
    //console.log('EDITOR:', this.editor);
    //console.log(this.editor.editorContent.nativeElement.ownerDocument.activeElement.selectionStart);
    //let startPos = this.editor.editorContent.nativeElement.ownerDocument.activeElement.selectionStart;
    //let endPos = this.editor.editorContent.nativeElement.ownerDocument.activeElement.selectionEnd;
    //let str='';
    //str = str.substring(0, startPos) + value + str.substring(endPos, str.length);
    //this._updateService.sendContent(value);
    console.log('s:', value);
    this._updateService.sendContent(value);
  }

}
