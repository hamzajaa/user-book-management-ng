import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)], // not forRoot
  exports: [RouterModule]
})
export class HeaderRoutingModule {

}
