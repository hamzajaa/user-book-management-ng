import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./modules/header/header.component";
import {LoginAdminComponent} from "./login-admin/login-admin.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
    {path: 'login', component: LoginAdminComponent},
    {path: '', component: HomeComponent},
    {
      path: '',
      component: HeaderComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/view-routing.module').then(m => m.ViewRoutingModule), // @Lazy loading
          canActivate: [AuthGuard]
        }
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
