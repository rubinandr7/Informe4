import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public commentsService: CommentsService) { }

  busq = "";
  selected: FormControl = new FormControl(null);
  opc: any;

  ngOnInit(): void {
  }

  Opciones(opc) {
    this.opc;
    if (opc == "1") {
      this.opc = opc;
    } else if (opc == "2") {
      this.opc = opc;
    } else if (opc == "3") {
      this.opc = opc;
    } else if (opc == "0") {
      this.opc = opc;
    }
  }

}
