import { LoadProjectService } from './../services/load-project.service';
import { ProjectImp } from './../projectImp';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.css']
})
export class OpenDialogComponent implements OnInit {

  projects: any = [];

  constructor(private _loadProjectService: LoadProjectService) {
    this.currentProjects();
   }

  ngOnInit() {
  }

  currentProjects() {
    let keys = Object.keys(localStorage);
    for (const key of keys) {
      this.projects.push(new ProjectImp(key, localStorage.getItem(key)));
    }
  }

  deleteProject(project) {
    const index = this.projects.indexOf(project, 0);
    if (index > -1) {
      this.projects.splice(index, 1);
      localStorage.removeItem(project.name);
    }
  }

  openProject(project) {
    if(project) {
      this._loadProjectService.loadCode(project.content);
    }
  }

}
