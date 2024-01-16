import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {BookDto} from "../../../models/BookDto";
import {AuthorDto} from "../../../models/AuthorDto.model";
import {CategoryDto} from "../../../models/CategoryDto.model";
import {AuthorService} from "../../../services/author.service";
import {CategoryService} from "../../../services/category.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {StringUtils} from "../../../utils/StringUtils";


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  private _submitted!: boolean;

  private _validBookTitle: boolean = true;
  private _validBookDescription: boolean = true;
  private _validBookNumberOfPages: boolean = true;

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private categoryService: CategoryService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.loadAuthors();
    this.loadCategories();
  }

  public save() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.validateForm()
        if (this.errorMessages.length === 0) {
          this.bookService.save(this.selectedBook).subscribe({
            next: (book) => {
              this.books.push({...book});
              this.createDialog = false;
              this.selectedBook = new BookDto();
              this.messageService.add({severity: 'success', summary: 'Success', detail: 'Book Saved Successfully'});
            }
            , error: err => {
              console.log(err);
            }
          })
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Errors',
            detail: 'Please correct the errors on the form'
          })
        }
      },
      reject: () => {
        this.messageService.add({severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled'});
      }
    })

  }

  public loadAuthors() {
    this.authorService.findAll().subscribe(data => this.authors = data);
  }

  public loadCategories() {
    this.categoryService.findAll().subscribe(data => this.categories = data);
  }

  public validateForm(): void {
    this.errorMessages = new Array<string>();
    this.validateBookTitle();
    this.validateBookDescription();
    this.validateBookNumberOfPages();
  }

  public validateBookTitle() {
    if (StringUtils.isEmpty(this.selectedBook.title)) {
      this.errorMessages.push('Title not valid')
      this.validBookTitle = false;
    } else {
      this.validBookTitle = true;
    }
  }

  public validateBookDescription() {
    if (StringUtils.isEmpty(this.selectedBook.description)) {
      this.errorMessages.push('Description not valid')
      this.validBookDescription = false;
    } else {
      this.validBookDescription = true;
    }
  }

  public validateBookNumberOfPages() {
    if (StringUtils.isEmpty(this.selectedBook.numberOfPages)) {
      this.errorMessages.push('NumberOfPages not valid')
      this.validBookNumberOfPages = false;
    } else {
      this.validBookNumberOfPages = true;
    }
  }

  openCreateAuthor(author: string) {
    this.selectedAuthor = new AuthorDto();
    this.createAuthorDialog = true;
  }

  openCreateCategory(author: string) {
    this.selectedCategory = new CategoryDto();
    this.createCategoryDialog = true;
  }

  hideCreateDialog() {
    this.createDialog = false;
  }


  get books(): Array<BookDto> {
    return this.bookService.books;
  }

  set books(value: Array<BookDto>) {
    this.bookService.books = value;
  }

  get errorMessages(): string[] {
    return this.bookService.errorMessages;
  }

  set errorMessages(value: string[]) {
    this.bookService.errorMessages = value;
  }

  get createDialog() {
    return this.bookService.createDialog
  }

  set createDialog(value: boolean) {
    this.bookService.createDialog = value
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get validBookTitle(): boolean {
    return this._validBookTitle;
  }

  set validBookTitle(value: boolean) {
    this._validBookTitle = value;
  }

  get validBookDescription(): boolean {
    return this._validBookDescription;
  }

  set validBookDescription(value: boolean) {
    this._validBookDescription = value;
  }

  get validBookNumberOfPages(): boolean {
    return this._validBookNumberOfPages;
  }

  set validBookNumberOfPages(value: boolean) {
    this._validBookNumberOfPages = value;
  }


  get createAuthorDialog(): boolean {
    return this.authorService.createDialog;
  }

  set createAuthorDialog(value: boolean) {
    this.authorService.createDialog = value;
  }

  get createCategoryDialog(): boolean {
    return this.categoryService.createDialog;
  }

  set createCategoryDialog(value: boolean) {
    this.categoryService.createDialog = value;
  }

  get selectedBook(): BookDto {
    return this.bookService.selectedBook;
  }

  set selectedBook(value: BookDto) {
    this.bookService.selectedBook = value;
  }

  get selectedAuthor(): AuthorDto {
    return this.authorService.selectedAuthor;
  }

  set selectedAuthor(value: AuthorDto) {
    this.authorService.selectedAuthor = value;
  }

  get selectedCategory(): CategoryDto {
    return this.categoryService.selectedCategory;
  }

  set selectedCategory(value: CategoryDto) {
    this.categoryService.selectedCategory = value;
  }

  get categories(): Array<CategoryDto> {
    return this.categoryService.categories;
  }

  set categories(value: Array<CategoryDto>) {
    this.categoryService.categories = value;
  }

  get authors(): Array<AuthorDto> {
    return this.authorService.authors;
  }

  set authors(value: Array<AuthorDto>) {
    this.authorService.authors = value;
  }

}
