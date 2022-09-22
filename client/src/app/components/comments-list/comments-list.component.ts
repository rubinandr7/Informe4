import { Component, OnInit, HostBinding } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from 'src/app/models/CommentsInterface'

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';
  
  comments: any = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.commentsService.getList()
      .subscribe(
        res => {
          this.comments = res;
        },
        err => console.error(err)
      );
  }

}
