import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)], // not forRoot
  exports: [RouterModule]
})
export class MenuRoutingModule {

}
