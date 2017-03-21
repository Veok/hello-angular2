import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { TitleService } from "../../services/title-service";
import { TitleModel } from "../../models/title-model";

@Component({
	selector: 'edit-title',
	templateUrl: 'edit-title.component.html'
})

export class EditTitleComponent implements OnInit {

	public title:string = "";

	constructor(private router:Router,
	 private route:ActivatedRoute,
	 private titlesService: TitleService){
		router.config
	}

	ngOnInit() { 

	this.route.params
	.switchMap((params:Params)=>
	 this.titlesService.getTitle(params['title']))
	.subscribe(
		(t:TitleModel)=>
			this.title = t.title
		);
	}
}