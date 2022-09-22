import { Component, OnInit, HostBinding } from '@angular/core';
import { Comment } from 'src/app/models/CommentsInterface';
import { CommentsService } from '../../services/comments.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  comment: Comment = {
    user: '',
    cuOca: '',
    mensaje: '',
    fecha: new Date(),
    tipo: 0
  }

  edit: boolean = false;

  

  constructor(private commentsService: CommentsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  algo() {
    console.log('todo fine');
  }

  saveNewComment() {
    delete this.comment.fecha;
    this.commentsService.saveComment(this.comment)
      .subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['/home']);
        },
        err => console.error(err)
      )
  }

}
