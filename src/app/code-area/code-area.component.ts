import { ChangeThemeService } from './../services/change-theme.service';
import { InsertService } from './../services/insert.service';
import { LoadProjectService } from './../services/load-project.service';
import { UpdateContentService } from './../services/update-content.service';
import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: [ './code-area.component.css' ]
})
export class CodeAreaComponent implements OnInit, OnDestroy  {
  public editorStyle = 'vs-dark';

  private subscription: Subscription = new Subscription();
  @ViewChild('editor') editor;
  @Input() code: string;
  options = {
    lineNumbers: true,
    contextmenu: true,
    language: 'html',
    minimap: {
      enabled: true
    }
  };

  value = '';

  constructor(private _updateService: UpdateContentService, private _loadProjectService: LoadProjectService,
              private _insertService: InsertService, private _changeTheme: ChangeThemeService) {}

  ngOnInit() {
    this.subscription.add(this._loadProjectService.load$.subscribe(
      content => {
        this.clearCode();
        this.onCodeChanged(content);
        this.editor.value = content;
      }
    ));
    
    this.subscription.add(this._insertService.insert$.subscribe(
      insertValue => {
        this.editor.value += insertValue;
        this.onCodeChanged(this.editor.value );
      }
    ));

    this.subscription.add(this._changeTheme.theme$.subscribe(
      theme => {
        this.changeTheme(theme);
      }
    ))
  }

  onCodeChanged(value) {
    this._updateService.sendContent(value);
  }

  clearCode() {
    this.editor.value = '';
  }

  changeTheme(theme) {
    console.log('CHANGE IT!');
    this.editorStyle = theme;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
