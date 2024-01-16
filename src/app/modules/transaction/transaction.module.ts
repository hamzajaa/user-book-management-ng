import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionComponent} from "./transaction.component";
import {CreateTransactionComponent} from "./create-transaction/create-transaction.component";
import {EditTransactionComponent} from "./edit-transaction/edit-transaction.component";
import {ListTransactionComponent} from "./list-transaction/list-transaction.component";
import {ViewTransactionComponent} from "./view-transaction/view-transaction.component";



@NgModule({
  declarations: [
    TransactionComponent,
    CreateTransactionComponent,
    EditTransactionComponent,
    ListTransactionComponent,
    ViewTransactionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
