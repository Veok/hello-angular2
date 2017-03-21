import { TitleModel } from "../models/title-model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TitleService{

    private static _titles: Array<TitleModel> = [];

    public addTitle(model: TitleModel):void{
            TitleService._titles.push(model);
    }

    public getTitle(title:string):Observable<TitleModel>{
        return Observable.of(TitleService._titles.find(model=>model.title==title));
    }
}