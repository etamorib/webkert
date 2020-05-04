import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { UpdateContentService } from '../services/update-content.service';

@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.css']
})
export class SaveDialogComponent implements OnInit {
  public saveName: string;
  value = '';

  constructor(public dialogRef: MatDialogRef<SaveDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: any, private _updateService: UpdateContentService) { }

  ngOnInit() {
  }

  save(){
    console.log('value:', this._updateService.currentContent);
    console.log(this.saveName);
    this.dialogRef.close();
  }

}
