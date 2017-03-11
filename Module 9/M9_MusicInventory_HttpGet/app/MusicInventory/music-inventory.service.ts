import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IMusicInventory } from './music-inventory';

@Injectable(
    //optional
)

export class MusicInventoryService {

    private _productUrl = 'api/products/musicproducts.json';

    constructor(private _http: Http){}
    
    getInventory(): Observable<IMusicInventory[]> {
        return this._http.get(this._productUrl)
                    .map((response: Response) => <IMusicInventory[]> response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}//end of class