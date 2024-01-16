import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)], // not forRoot
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
