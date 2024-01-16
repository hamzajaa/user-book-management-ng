import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {CategoryDto} from "../../../models/CategoryDto.model";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  get category(): CategoryDto {
    return this.categoryService.category;
  }

  set category(value: CategoryDto) {
    this.categoryService.category = value;
  }

  get viewDialog(): boolean {
    return this.categoryService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.categoryService.viewDialog = value;
  }
}
