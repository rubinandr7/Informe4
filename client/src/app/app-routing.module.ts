import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsListComponent } from './components/comments-list/comments-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: CommentsListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
