import {Component, OnInit} from '@angular/core';
import {BookDto} from "../../../models/BookDto";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  get book(): BookDto {
    return this.bookService.book;
  }

  set book(value: BookDto) {
    this.bookService.book = value;
  }
  get viewDialog() {
    return this.bookService.viewDialog
  }

  set viewDialog(value: boolean) {
    this.bookService.viewDialog = value
  }

}
