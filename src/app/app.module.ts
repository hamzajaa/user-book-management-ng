import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ViewModule} from "./modules/view.module";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // the AppModule catch this AppRoutingModule and says he if the path is home than open the HomeComponent
    HttpClientModule,
    RouterModule,
    ViewModule,
    BrowserAnimationsModule,
    CardModule,
    ImageModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
