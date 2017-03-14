import {
  Component,
  OnInit,
  Input,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'title-list',
  templateUrl: 'title-list.component.html'
})

export class TitleListComponent implements OnInit {

  @Input() public myTitles: Array < TitleModel >= [];

  public valueFromEvent: string;
  public startLoading: EventEmitter < boolean > = new EventEmitter < any > ();


  public filterTitles(event) {
    this.valueFromEvent = event.target.value;
    this.startLoading.emit(true);

    this.delay(3000).then((x) => {
      this.startLoading.emit(false);
      this.myTitles.forEach(model => {
        model.isVisible = model.title.includes(event.target.value);
      });
    })
  }

  delay(ms: number): Promise < any > {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {}
}

class TitleModel {

  public title: string;
  public isVisible: Boolean;
}
