import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TransactionComponent} from "./transaction.component";

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)], // not forRoot
  exports: [RouterModule]
})
export class TransactionRoutingModule {

}
