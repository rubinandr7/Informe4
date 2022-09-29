import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CommentPComponent } from './components/comment-p/comment-p.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CursosComponent } from './components/curso/cursos.component';

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
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
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
    path: 'curso',
    component: CursosComponent
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
