import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleComponent }  from './title.component';
import { FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';

@NgModule({
    declarations: [ TitleComponent ],
    imports: [ BrowserModule, FormsModule, CommonModule ],
    exports: [TitleComponent],
   providers: [],
   schemas: []
  
})
export class TitleModule {}