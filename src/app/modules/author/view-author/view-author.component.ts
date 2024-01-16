import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../../services/author.service";
import {AuthorDto} from "../../../models/AuthorDto.model";

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {

  constructor(private authorService: AuthorService) {
  }


  ngOnInit(): void {
  }

  hideEditDialog() {
    this.viewDialog = false;
  }

  get author(): AuthorDto {
    return this.authorService.author;
  }

  set author(value: AuthorDto) {
    this.authorService.author = value;
  }

  get viewDialog(): boolean {
    return this.authorService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.authorService.viewDialog = value;
  }

}
