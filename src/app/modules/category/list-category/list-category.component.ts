import {Component, OnInit} from '@angular/core';
import {CategoryDto} from "../../../models/CategoryDto.model";
import {CategoryService} from "../../../services/category.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  findByCriteriaShow: boolean = false;

  constructor(private categoryService: CategoryService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.loadCategories();
  }


  deleteSelectedCategories() {

  }

  editCategory(category: CategoryDto) {
    this.categoryService.findById(category).subscribe(category => {
      this.category = category;
      this.editDialog = true;
    })

  }

  public deleteCategory(category: CategoryDto) {
    this.confirmationService.confirm({
      message: 'Are you sure to delete this category ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoryService.delete(category.id).subscribe(number => {
          if (number > 0) {
            const position = this.categories.indexOf(category);
            position > -1 ? this.categories.splice(position, 1) : false;
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Category deleted successfully',
              life: 3000
            })
          }
        }, error => {
          console.log(error);
        })
      }
    })
  }

  viewCategory(category: CategoryDto) {
    this.categoryService.findById(category).subscribe(category => {
      this.category = category;
      this.viewDialog = true;
    })
  }

  loadCategories() {
    this.categoryService.findAll().subscribe(data => this.categories = data)
  }

  openNew() {
    this.selectedCategory = new CategoryDto();
    this.createDialog = true;
  }


  get category(): CategoryDto {
    return this.categoryService.category;
  }

  set category(value: CategoryDto) {
    this.categoryService.category = value;
  }

  get categories(): Array<CategoryDto> {
    return this.categoryService.categories;
  }

  set categories(value: Array<CategoryDto>) {
    this.categoryService.categories = value;
  }

  get createDialog(): boolean {
    return this.categoryService.createDialog;
  }

  set createDialog(value: boolean) {
    this.categoryService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.categoryService.editDialog;
  }

  set editDialog(value: boolean) {
    this.categoryService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.categoryService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.categoryService.viewDialog = value;
  }

  get selectedCategory(): CategoryDto {
    return this.categoryService.selectedCategory;
  }

  set selectedCategory(value: CategoryDto) {
    this.categoryService.selectedCategory = value;
  }

  get searchCategory(): CategoryDto {
    return this.categoryService.searchCategory;
  }

  set searchCategory(value: CategoryDto) {
    this.categoryService.searchCategory = value;
  }

  get selectedCategories(): Array<CategoryDto> {
    return this.categoryService.selectedCategories;
  }

  set selectedCategories(value: Array<CategoryDto>) {
    this.categoryService.categories = value;
  }

}
