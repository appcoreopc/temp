import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../Person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

    private _http: Http;
    private _dataList: any;
    private _dataSearch: any;
    private _localhost: string = "http://localhost:80";
    private _urlPersonAdd: string = this._localhost + "/api/person/addPerson";
    private _urlPersonList: string = this._localhost + "/api/person/list";
    private _urlPersonSearch: string = this._localhost + "/api/person/list";

    constructor(private http: Http) {
    }

    addPerson(person: Person) {

    }

    listPerson(person: Person) {

        return new Promise(resolve => {
            this._http.get(this._urlPersonList).map(data => data.json()).subscribe(x => {
                this._dataList = x.data;
                resolve(this._dataList);
            });
        });
    }

    search(firstname: string, lastname: string, age: string) {
        return new Promise(resolve => {
            this._http.get(this._urlPersonSearch + "?firstname=" + firstname + "&lastname" + lastname
                + "&age=" + age).map(x => x.json()).subscribe(y => {
                    this._dataSearch = y;
                    resolve(this._dataSearch);
                });
        });
    }
}