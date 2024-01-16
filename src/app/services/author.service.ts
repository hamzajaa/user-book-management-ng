import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthorDto} from "../models/AuthorDto.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private API = environment.apiUrl + 'authors/';
  private _createDialog!: boolean;
  private _editDialog!: boolean;
  private _viewDialog!: boolean;
  private _selectedAuthors: Array<AuthorDto> = new Array<AuthorDto>();
  private _selectedAuthor: AuthorDto = new AuthorDto();
  private _searchAuthor: AuthorDto = new AuthorDto();
  private _authors: Array<AuthorDto> | undefined;
  private _author: AuthorDto = new AuthorDto;
  private _errorMessages: Array<string> = new Array<string>()

  constructor(private http: HttpClient) {
  }

  public findAll() {
    const token = window.localStorage.getItem('token')
    return this.http.get<Array<AuthorDto>>(this.API);
  }

  // public findAll() {
  //   const token = window.localStorage.getItem('token')
  //   return this.http.get<Array<AuthorDto>>(this.API, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     }
  //   });
  // }

  public save(authorDto: AuthorDto): Observable<AuthorDto> {
    console.log(authorDto)
    return this.http.post<AuthorDto>(this.API, authorDto);
  }

  public findById(id: number) {
    return this.http.get<AuthorDto>(this.API + "id/" + id);
  }

  public delete(id: number) {
    return this.http.delete<number>(this.API + "id/" + id);
  }

  public edit(author: AuthorDto) {
    return this.http.put<AuthorDto>(this.API, author);
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

  get selectedAuthor(): AuthorDto {
    return this._selectedAuthor;
  }

  set selectedAuthor(value: AuthorDto) {
    this._selectedAuthor = value;
  }


  get author(): AuthorDto {
    return this._author;
  }

  set author(value: AuthorDto) {
    this._author = value;
  }


  get authors(): Array<AuthorDto> {
    if (this._authors == null) {
      this._authors = new Array<AuthorDto>();
    }
    return this._authors;
  }

  set authors(value: Array<AuthorDto>) {
    this._authors = value;
  }


  get errorMessages(): Array<string> {
    return this._errorMessages;
  }

  set errorMessages(value: Array<string>) {
    this._errorMessages = value;
  }


  get searchAuthor(): AuthorDto {
    return this._searchAuthor;
  }

  set searchAuthor(value: AuthorDto) {
    this._searchAuthor = value;
  }

  get selectedAuthors(): Array<AuthorDto> {
    return this._selectedAuthors;
  }

  set selectedAuthors(value: Array<AuthorDto>) {
    this._selectedAuthors = value;
  }
}
