import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'title-children',
	templateUrl: 'title.component.html',
	styleUrls:['title.component.css']
})

export class TitleComponent implements OnInit {

	@Input() myTitle:string;

	public isVisible:boolean = false;
	
	ngOnInit() { }
}