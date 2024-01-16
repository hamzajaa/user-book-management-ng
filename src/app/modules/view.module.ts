import {NgModule} from "@angular/core";
import {AuthorModule} from "./author/author.module";
import {BookModule} from "./book/book.module";
import {CategoryModule} from "./category/category.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {TransactionModule} from "./transaction/transaction.module";
import {ClientModule} from "./client/client.module";
import {MenuModule} from "./menu/menu.module";
import {HeaderModule} from "./header/header.module";
import {LoginAdminComponent} from "../login-admin/login-admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    AuthorModule,
    BookModule,
    CategoryModule,
    DashboardModule,
    TransactionModule,
    ClientModule,
    MenuModule,
    HeaderModule,
    LoginAdminComponent
  ]
})
export class ViewModule{

}
