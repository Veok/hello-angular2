import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TitleComponent } from "./components/title/title.component";
import { TitleListComponent } from "./components/title-list/title-list.component";
import { AddTitleComponent } from "./components/add-title/add-title.component";
import { Routes, RouterModule } from "@angular/router";
import { EditTitleComponent } from "./edit-title/edit-title.component";

const routes:Routes = [
    {path:'titles/title/:title', component:EditTitleComponent}
];
@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        RouterModule.forChild(routes)
        ],
    exports: [TitleComponent, TitleListComponent, AddTitleComponent, EditTitleComponent],
    declarations: [TitleComponent, TitleListComponent, AddTitleComponent],
    providers: [],
    schemas: []
})
export class TitleModule { }
