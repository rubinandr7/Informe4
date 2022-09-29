import { Component, OnInit, HostBinding } from '@angular/core';
import { Curso } from 'src/app/models/CursosInterface';
import { CommentsService } from '../../services/comments.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  curso: Curso = {
    usuario: '',
    curso: '',
    creditos: 0
  }

  constructor(private commentsService: CommentsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveNewCurso() {
    this.commentsService.saveCursoA(this.curso)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/perfil']);
        },
        err => console.error(err)
      )
  }

}
