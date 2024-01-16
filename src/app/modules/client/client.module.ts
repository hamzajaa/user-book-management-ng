import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientComponent} from "./client.component";
import {CreateClientComponent} from "./create-client/create-client.component";
import {ListClientComponent} from "./list-client/list-client.component";
import {EditClientComponent} from "./edit-client/edit-client.component";
import {ViewClientComponent} from "./view-client/view-client.component";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {AuthorModule} from "../author/author.module";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";



@NgModule({
  declarations: [
    ClientComponent,
    CreateClientComponent,
    ListClientComponent,
    EditClientComponent,
    ViewClientComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    RippleModule,
    SharedModule,
    TabViewModule,
    FormsModule,
    AuthorModule,
    FileUploadModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ]
})
export class ClientModule { }
