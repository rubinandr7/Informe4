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

  commentp: boolean = false;

  constructor(private commentsService: CommentsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.commentsService.getPublicacion(params['cuOca'])
        .subscribe(
          res => {
            console.log(res);
            //this.comment['cuOca'] = res;
            this.commentp = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewComment() {
    delete this.comment.fecha;
    this.commentsService.saveComment(this.comment)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => console.error(err)
      )
  }

  saveNewCommentP(){
    const params = this.activatedRoute.snapshot.params;
    delete this.comment.fecha;
    this.commentsService.saveCommentP(params['cuOca'], this.comment)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => console.error(err)
      )
  }

}
