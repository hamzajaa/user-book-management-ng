import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorComponent} from "./author.component";
import {CreateAuthorComponent} from "./create-author/create-author.component";
import {EditAuthorComponent} from "./edit-author/edit-author.component";
import {ListAuthorComponent} from "./list-author/list-author.component";
import {ViewAuthorComponent} from "./view-author/view-author.component";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {PaginatorModule} from "primeng/paginator";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";



@NgModule({
  declarations: [
    AuthorComponent,
    CreateAuthorComponent,
    EditAuthorComponent,
    ListAuthorComponent,
    ViewAuthorComponent,
  ],
  exports: [
    CreateAuthorComponent,
    ViewAuthorComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    PaginatorModule,
    RippleModule,
    SharedModule,
    TabViewModule,
    ToolbarModule,
    ToastModule,
    FileUploadModule,
    TableModule,
    ConfirmDialogModule
  ]
})
export class AuthorModule { }
