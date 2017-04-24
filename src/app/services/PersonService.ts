import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../Person';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from './SearchParameterUrl';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

    private _http: Http;
    private _dataList: any;
    private _searchResult: any;
    private _localhost: string = "http://localhost:80";
    private _urlPersonAdd: string = this._localhost + "/api/person/addPerson";
    private _urlPersonList: string = this._localhost + "/api/person/list";
    private _urlPersonSearch: string = this._localhost + "/api/person/search";

    isLoading: boolean = false;

    constructor(private http: Http) {
    }

    addPerson(person: Person): Observable<any> {
        return this._http.post(this._urlPersonAdd, JSON.stringify(person)).map(data => data.json());
    };

    listPerson(): Observable<any> {
        return this._http.get(this._urlPersonList).map(data => data.json());
    };

    search(firstname: string, lastname: string) {

        var searchUrlParser = new URLSearchParams();
        var searchUrl =
            searchUrlParser.getSearchParameter(firstname, lastname);

        return this._http.get(this._urlPersonSearch + searchUrl).map(x => x.json()).subscribe(searchData => {
            this._searchResult = searchData;
        });
    }
}