import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginAdminComponent} from "../login-admin/login-admin.component";
import {AuthGuard} from "../guards/auth.guard";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('././dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'header',
        loadChildren: () => import('././header/header-routing.module').then(m => m.HeaderRoutingModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'book',
        loadChildren: () => import('././book/book-routing.module').then(m => m.BookRoutingModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'author',
        loadChildren: () => import('././author/author-routing.module').then(m => m.AuthorRoutingModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'client',
        loadChildren: () => import('./client/client-routing.module').then(m => m.ClientRoutingModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'category',
        loadChildren: () => import('././category/category-routing.module').then(m => m.CategoryRoutingModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'transaction',
        loadChildren: () => import('././transaction/transaction-routing.module').then(m => m.TransactionRoutingModule),
        canActivate:[AuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)], // not forRoot
  exports: [RouterModule]
})
export class ViewRoutingModule {

}
