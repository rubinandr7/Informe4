import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component'

const routes: Routes = [
  {
    path: 'home',
    component: CommentsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'comentar',
    component: CommentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
