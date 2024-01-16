import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from "./book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {ListBookComponent} from "./list-book/list-book.component";
import {ViewBookComponent} from "./view-book/view-book.component";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {TagModule} from "primeng/tag";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {MessageModule} from "primeng/message";
import {ConfirmationService, MessageService} from "primeng/api";
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {AccordionModule} from "primeng/accordion";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {TabViewModule} from "primeng/tabview";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {AuthorModule} from "../author/author.module";
import {CategoryModule} from "../category/category.module";


@NgModule({
  declarations: [
    BookComponent,
    CreateBookComponent,
    EditBookComponent,
    ListBookComponent,
    ViewBookComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    TagModule,
    FileUploadModule,
    ToastModule,
    ToolbarModule,
    RippleModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    InputNumberModule,
    AccordionModule,
    InputSwitchModule,
    InputTextareaModule,
    CascadeSelectModule,
    TabViewModule,
    AuthorModule,
    MessageModule,
    ConfirmDialogModule,
    CategoryModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class BookModule {
}
