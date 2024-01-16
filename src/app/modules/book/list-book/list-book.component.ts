import {Component, OnInit} from '@angular/core';
import {BookDto} from "../../../models/BookDto";
import {BookService} from "../../../services/book.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {AuthorDto} from "../../../models/AuthorDto.model";
import {CategoryDto} from "../../../models/CategoryDto.model";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  findByCriteriaShow: boolean = false;

  authors!: Array<AuthorDto>;
  categories!: Array<CategoryDto>;

  selectedBooks!: BookDto[] | null;

  submitted: boolean = false;

  constructor(private bookService: BookService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.loadBooks();
  }

  openNew() {
    this.selectedBook = new BookDto();
    this.submitted = false;
    this.createDialog = true;
  }

  public loadBooks() {
    this.bookService.findAll().subscribe(data => this.books = data);
  }

  deleteSelectedBooks() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected books?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.books = this.books.filter((val) => !this.selectedBooks?.includes(val));
        this.selectedBooks = null;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Books Deleted', life: 3000});
      }
    });
  }

  editBook(book: BookDto) {
    this.bookService.findById(book).subscribe(book => {
      this.book = book;
      this.editDialog = true;
    })
  }

  public deleteBook(book: BookDto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + book.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.bookService.delete(book).subscribe({
          next: (number) => {
            if (number > 0) {
              this.books = this.books.filter((b) => b.id !== book.id);
              this.book = new BookDto();
              this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Book Deleted', life: 3000});
            }
          },
          error: (err) => {
            console.log(err)
          }
        });
      }
    });
  }

  viewBook(book: BookDto) {
    this.bookService.findById(book).subscribe(book => {
      this.book = book;
      this.viewDialog = true;
    })
  }


  get books(): Array<BookDto> {
    return this.bookService.books;
  }

  set books(value: Array<BookDto>) {
    this.bookService.books = value;
  }

  get book(): BookDto {
    return this.bookService.book;
  }

  set book(value: BookDto) {
    this.bookService.book = value;
  }

  get searchBook(): BookDto {
    return this.bookService.searchBook;
  }

  set searchBook(value: BookDto) {
    this.bookService.searchBook = value;
  }

  get createDialog() {
    return this.bookService.createDialog
  }

  set createDialog(value: boolean) {
    this.bookService.createDialog = value
  }

  get editDialog() {
    return this.bookService.editDialog
  }

  set editDialog(value: boolean) {
    this.bookService.editDialog = value
  }

  get viewDialog() {
    return this.bookService.viewDialog
  }

  set viewDialog(value: boolean) {
    this.bookService.viewDialog = value
  }

  get selectedBook(): BookDto {
    return this.bookService.selectedBook;
  }

  set selectedBook(value: BookDto) {
    this.bookService.selectedBook = value;
  }
}
