import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  public myTitles: Array < string > = [];

  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }

  public addTitle(): void {
    this.myTitles.push(this._title);
    this._title = '';
  }
  public constructor() {
    this._title = "Gitara Siema!";
  }

  public ngOnInit(): void {}



}
