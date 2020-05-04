import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';


const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      SafeHtmlPipe
   ]
})
export class AppRoutingModule { }
