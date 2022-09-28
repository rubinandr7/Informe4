import { Component, OnInit, HostBinding } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment-p',
  templateUrl: './comment-p.component.html',
  styleUrls: ['./comment-p.component.css']
})
export class CommentPComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  comments: any = [];

  constructor(private commentsService: CommentsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCommentsP();
  }

  getCommentsP() {
    const params = this.activatedRoute.snapshot.params;
    this.commentsService.getCommentsP(params['cuOca'])
      .subscribe(
        res => {
          this.comments = res;
        },
        err => console.error(err)
      );
  }

}
