import {Component, OnInit} from '@angular/core';
import {CategoryDto} from "../../../models/CategoryDto.model";
import {CategoryService} from "../../../services/category.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {StringUtils} from "../../../utils/StringUtils";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  private _validCategoryLabel: boolean = true;

  constructor(private categoryService: CategoryService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

  public save() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.validateForm()
        console.log(this.errorMessages.length)
        if (this.errorMessages.length === 0) {
          this.categoryService.save(this.selectedCategory).subscribe({
            next: (category) => {
              this.categories.push({...category})
              this.createDialog = false;
              this.selectedCategory = new CategoryDto();
              this.messageService.add({severity: 'success', summary: 'Success', detail: 'Category Saved Successfully'});

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

  public validateForm() {
    this.errorMessages = new Array<string>();
    this.validateCategoryLabel();
  }

  public validateCategoryLabel() {
    if (StringUtils.isEmpty(this.selectedCategory.label)) {
      this.errorMessages.push('Label not valid')
      this.validCategoryLabel = false;
    } else {
      this.validCategoryLabel = true;
    }
  }

  hideCreateDialog() {
    this.createDialog = false;
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
