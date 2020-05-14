import { ChangeThemeService } from './../services/change-theme.service';
import { LoadProjectService } from './../services/load-project.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';
import { OpenDialogComponent } from '../open-dialog/open-dialog.component';
import { InsertService } from '../services/insert.service';

@Component({
  selector: 'app-toolbar-elements',
  templateUrl: './toolbar-elements.component.html',
  styleUrls: ['./toolbar-elements.component.css']
})
export class ToolbarElementsComponent implements OnInit {

  saveName: string;

  HEADERS = [
    '<h1></h1>',
    '<h2></h2>',
    '<h3></h3>',
    '<h4></h4>',
    '<h5></h5>',
    '<h6></h6>'
  ];

  DOCUMENTS = [
    '<body></body>',
    '<style></style>',
    '<head></head>',
  ];

  CONTENT = [
    '<address></address>',
    '<article></article>',
    '<footer></footer>',
    '<header></header>',
    '<section></section>'
  ];

  TEXT = [
    '<div></div>',
    '<blockquote></blockquote>',
    '<dd></dd>',
    '<hr></hr>',
    '<li></li>',
    '<ul></ul>',
    '<ol></ol>',
    '<p></p>'
  ];

  MULTIMEDIA = [
    '<img src="#>',
    '<video></video>',
    '<audio></audio>'
  ];

  TABLE = [
    '<table></table>',
    '<tbody></tbody>',
    '<td></td>',
    '<tfoot></tfoot>',
    '<th></th>',
    '<thead></thead>',
    '<tr></tr>'
  ];


  constructor(private dialog: MatDialog, private _insertService: InsertService, private _themeService: ChangeThemeService) { }

  ngOnInit() {
  }

  save() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(SaveDialogComponent, dialogConfig);

  }

  open() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(OpenDialogComponent, dialogConfig);
  }

  insert(value){
    this._insertService.insertTag(value);
  }

  setTheme(value){
    this._themeService.changeTheme(value);
  }

}
