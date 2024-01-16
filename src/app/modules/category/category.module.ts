import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryComponent} from "./category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {ViewCategoryComponent} from "./view-category/view-category.component";
import {AuthorModule} from "../author/author.module";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";



@NgModule({
    declarations: [
        CategoryComponent,
        CreateCategoryComponent,
        EditCategoryComponent,
        ListCategoryComponent,
        ViewCategoryComponent,
    ],
    exports: [
        CreateCategoryComponent
    ],
    imports: [
        CommonModule,
        AuthorModule,
        ButtonModule,
        ConfirmDialogModule,
        DialogModule,
        DropdownModule,
        InputNumberModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        ReactiveFormsModule,
        RippleModule,
        SharedModule,
        TabViewModule,
        FormsModule,
        FileUploadModule,
        TableModule,
        ToastModule,
        ToolbarModule
    ]
})
export class CategoryModule { }
