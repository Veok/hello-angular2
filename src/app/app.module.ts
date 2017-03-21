import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {TitleModule} from './title/title.module';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path:"app", component:AppComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"app", pathMatch:'full'}
]; 

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    LoginComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TitleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [HomeComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
