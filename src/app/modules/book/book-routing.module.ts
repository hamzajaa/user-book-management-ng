import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookComponent} from "./book.component";
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    canActivate:[AuthGuard]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)], // not forRoot
  exports: [RouterModule]
})
export class BookRoutingModule {

}
