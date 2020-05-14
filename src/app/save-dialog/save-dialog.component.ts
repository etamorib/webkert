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
  public value: string;

  constructor(public dialogRef: MatDialogRef<SaveDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: any, private _updateService: UpdateContentService) {
                this.value = this._updateService.currentContent;
               }

  ngOnInit() {
  }

  save(){
    if (this.saveName && this.value){
      localStorage.setItem(this.saveName, this.value);
      alert('Project ' + this.saveName + ' has been saved');
      this.dialogRef.close();
    } else {
      alert('Empty project or name!');
    }
  }

}
