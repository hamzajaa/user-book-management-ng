import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthorComponent} from "./author.component";

const routes: Routes = [
  {
    path: '',
    component: AuthorComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)], // not forRoot
  exports: [RouterModule]
})
export class AuthorRoutingModule {

}
