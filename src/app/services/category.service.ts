import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CategoryDto} from "../models/CategoryDto.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private API = environment.apiUrl + 'categories/';
  private _createDialog!: boolean;
  private _editDialog!: boolean;
  private _viewDialog!: boolean;
  private _selectedCategory: CategoryDto = new CategoryDto();
  private _selectedCategories: Array<CategoryDto> = new Array<CategoryDto>();
  private _category: CategoryDto = new CategoryDto();
  private _categories: Array<CategoryDto> = new Array<CategoryDto>();
  private _errorMessages: Array<string> = new Array<string>();
  private _searchCategory: CategoryDto = new CategoryDto();

  constructor(private http: HttpClient) {
  }


  public save(category: CategoryDto) {
    return this.http.post<CategoryDto>(this.API, category);
  }

  public findAll() {
    return this.http.get<Array<CategoryDto>>(this.API);
  }

  public findById(category: CategoryDto): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(this.API + 'id/' + category.id);
  }

  public edit(category: CategoryDto): Observable<CategoryDto> {
    return this.http.put<CategoryDto>(this.API, category);
  }

  public delete(id: number) {
    return this.http.delete<number>(this.API + "id/" + id);
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

  get selectedCategory(): CategoryDto {
    return this._selectedCategory;
  }

  set selectedCategory(value: CategoryDto) {
    this._selectedCategory = value;
  }

  get searchCategory(): CategoryDto {
    return this._searchCategory;
  }

  set searchCategory(value: CategoryDto) {
    this._searchCategory = value;
  }

  get category(): CategoryDto {
    return this._category;
  }

  set category(value: CategoryDto) {
    this._category = value;
  }

  get categories(): Array<CategoryDto> {
    return this._categories;
  }

  set categories(value: Array<CategoryDto>) {
    this._categories = value;
  }


  get errorMessages(): Array<string> {
    return this._errorMessages;
  }

  set errorMessages(value: Array<string>) {
    this._errorMessages = value;
  }

  get selectedCategories(): Array<CategoryDto> {
    return this._selectedCategories;
  }

  set selectedCategories(value: Array<CategoryDto>) {
    this._selectedCategories = value;
  }
}
