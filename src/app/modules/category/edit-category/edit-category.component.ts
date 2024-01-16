import {Component, OnInit} from '@angular/core';
import {StringUtils} from "../../../utils/StringUtils";
import {CategoryDto} from "../../../models/CategoryDto.model";
import {CategoryService} from "../../../services/category.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  private _validCategoryLabel: boolean = true;

  constructor(private categoryService: CategoryService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService
  ) {
  }

  ngOnInit() {
  }

  edit() {
    this.validateForm();
    if (this.errorMessages.length === 0) {
      this.categoryService.edit(this.category).subscribe({
        next: (category) => {
          const index = this.categories.findIndex(c => c.id === category.id);
          this.categories[index] = category;
          this.editDialog = false;
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }


  public validateForm() {
    this.errorMessages = new Array<string>();
    this.validateCategoryLabel();
  }

  public validateCategoryLabel() {
    if (StringUtils.isEmpty(this.category.label)) {
      this.errorMessages.push('Label not valid')
      this.validCategoryLabel = false;
    } else {
      this.validCategoryLabel = true;
    }
  }

  hideEditDialog() {
    this.editDialog = false;
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

  get editDialog(): boolean {
    return this.categoryService.editDialog;
  }

  set editDialog(value: boolean) {
    this.categoryService.editDialog = value;
  }

  get selectedCategory(): CategoryDto {
    return this.categoryService.selectedCategory;
  }

  set selectedCategory(value: CategoryDto) {
    this.categoryService.selectedCategory = value;
  }

  get errorMessages(): string[] {
    return this.categoryService.errorMessages;
  }

  set errorMessages(value: string[]) {
    this.categoryService.errorMessages = value;
  }

  get validCategoryLabel(): boolean {
    return this._validCategoryLabel;
  }

  set validCategoryLabel(value: boolean) {
    this._validCategoryLabel = value;
  }

}
