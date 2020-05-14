import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


import { CodeEditorModule } from '@ngstack/code-editor';


import { AppComponent } from './app.component';
import { CodeAreaComponent } from './code-area/code-area.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { ToolbarElementsComponent } from './toolbar-elements/toolbar-elements.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { FormsModule } from '@angular/forms';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';

@NgModule({
   declarations: [
      AppComponent,
      CodeAreaComponent,
      ContentAreaComponent,
      SafeUrlPipe,
      SafeHtmlPipe,
      ToolbarElementsComponent,
      SaveDialogComponent,
      OpenDialogComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      FlexLayoutModule,
      MatGridListModule,
      MatDialogModule,
      MatFormFieldModule,
      FormsModule,
      MatInputModule,
      MatMenuModule,
      MatButtonToggleModule,
      CodeEditorModule.forRoot()
   ],
   entryComponents: [
      SaveDialogComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
