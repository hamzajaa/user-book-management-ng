import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CategoryComponent} from "./category.component";

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)], // not forRoot
  exports: [RouterModule]
})
export class CategoryRoutingModule {

}
