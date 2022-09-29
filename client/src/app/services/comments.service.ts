import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Comment } from '../models/CommentsInterface';
import { Curso } from '../models/CursosInterface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getList(): any {
    return this.http.get(`${this.API_URI}/home`);
  }

  getCursos(): any {
    return this.http.get(`${this.API_URI}/cursos`);
  }

  getCatedraticos(): any {
    return this.http.get(`${this.API_URI}/catedraticos`);
  }

  getCurso(curso: string): any {
    return this.http.get(`${this.API_URI}/cursos/${curso}`);
  }

  getCatedratico(catedratico: string): any {
    return this.http.get(`${this.API_URI}/catedraticos/${catedratico}`);
  }

  getCommentsP(cuOca: string): any {
    return this.http.get(`${this.API_URI}/comentarios/${cuOca}`);
  }

  saveComment(comment: Comment){
    return this.http.post(`${this.API_URI}/nuevaPublicacion`, comment);
  }

  saveCommentP(cuOca: string, comment: Comment){
    return this.http.post(`${this.API_URI}/nuevoComentario/${cuOca}`, comment);
  }

  getPublicacion(cuOca: string): any {
    return this.http.get(`${this.API_URI}/publicacion/${cuOca}`);
  }

  getListC(): any {
    return this.http.get(`${this.API_URI}/cursosAprobados`);
  }

  saveCursoA(curso: Curso){
    return this.http.post(`${this.API_URI}/agregarCurso`, curso);
  }

}
