import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  
  comments: any = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.commentsService.getList()
      .subscribe(
        (res: any) => {
          this.comments = res;
        },
        (err: any) => console.error(err)
      );
  }

}
