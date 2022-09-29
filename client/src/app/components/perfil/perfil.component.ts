import { Component, OnInit, HostBinding } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  cursos: any = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.getListC();
  }

  getListC() {
    this.commentsService.getListC()
      .subscribe(
        res => {
          this.cursos = res;
        },
        err => console.error(err)
      );
  }

}
