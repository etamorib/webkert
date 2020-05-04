import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';

@Component({
  selector: 'app-toolbar-elements',
  templateUrl: './toolbar-elements.component.html',
  styleUrls: ['./toolbar-elements.component.css']
})
export class ToolbarElementsComponent implements OnInit {

  saveName: string;

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  save() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(SaveDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }

}
