import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CommentPComponent } from './components/comment-p/comment-p.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AddFormComponent } from './components/add-form/add-form.component'

const routes: Routes = [
  {
    path: 'home',
    component: CommentsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'comentar',
    component: CommentFormComponent
  },
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'comentarP/:cuOca',
    component: CommentFormComponent
  },
  {
    path: 'comentarios/:cuOca',
    component: CommentPComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'agregar',
    component: AddFormComponent
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
