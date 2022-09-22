import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component'
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: CommentsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'comentar',
    component: CommentFormComponent,
  },
  {
    path: 'auth',
    component: LoginComponent
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
