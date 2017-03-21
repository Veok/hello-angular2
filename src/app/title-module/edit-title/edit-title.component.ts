import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'edit-title',
	templateUrl: 'edit-title.component.html'
})

export class EditTitleComponent implements OnInit {

	public title:string = "";

	constructor(private router:Router, private route:ActivatedRoute){
		router.config
	}

	ngOnInit() { 

	this.route.params
	.switchMap((params:Params)=>params['title'])
	.subscribe(
		(t:string)=>
			this.title+=t
		);
	}
}