import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookDto} from "../models/BookDto";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private API = environment.apiUrl + "books/"

  private _createDialog!: boolean;
  private _editDialog!: boolean;
  private _viewDialog!: boolean;
  private _selectedBook: BookDto = new BookDto();
  private _books: Array<BookDto> = new Array<BookDto>();
  private _book: BookDto = new BookDto();
  private _searchBook: BookDto = new BookDto();
  private _errorMessages: Array<string> = new Array<string>();


  constructor(private http: HttpClient) {
  }

  public findAll() {
    return this.http.get<Array<BookDto>>(this.API);
  }

  public save(book: BookDto): Observable<BookDto> {
    return this.http.post<BookDto>(this.API, book);
  }

  delete(book: BookDto) {
    return this.http.delete<number>(this.API + 'id/' + book.id);
  }


  public edit(book: BookDto): Observable<BookDto> {
    return this.http.put<BookDto>(this.API, book);
  }


  public findByCriteria(book: BookDto): Observable<Array<BookDto>> {
    return this.http.post<Array<BookDto>>(this.API + 'search', book);
  }

  public findById(book: BookDto): Observable<BookDto> {
    return this.http.get<BookDto>(this.API + 'id/' + book.id);
  }


  get books(): Array<BookDto> {
    return this._books;
  }

  set books(value: Array<BookDto>) {
    this._books = value;
  }

  get book(): BookDto {
    return this._book;
  }

  set book(value: BookDto) {
    this._book = value;
  }

  get searchBook(): BookDto {
    return this._searchBook;
  }

  set searchBook(value: BookDto) {
    this._searchBook = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }


  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }


  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }


  get selectedBook(): BookDto {
    if (this._selectedBook == null) {
      this._selectedBook = new BookDto();
    }
    return this._selectedBook;
  }

  set selectedBook(value: BookDto) {
    this._selectedBook = value;
  }


  get errorMessages(): Array<string> {
    return this._errorMessages;
  }

  set errorMessages(value: Array<string>) {
    this._errorMessages = value;
  }
}
