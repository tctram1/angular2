import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProductInventory } from './product-inventory';

@Injectable(
    //optional
)

export class ProductInventoryService {

    private _productUrl = 'api/products/product-inventory.json';

    constructor(private _http: Http) {}

    getInventory(): Observable<IProductInventory[]> {
        return this._http.get(this._productUrl)
                    .map((response: Response) => <IProductInventory[]> response.json())
                    .do(data => console.table(data))
                    .catch(this.handleError);
    }

    getByCategory(CatID: number): Observable<IProductInventory[]> {
       console.log("product-inventory.service: getByCategory is called");
        return this.getInventory()
                    .map((byCategory: IProductInventory[]) => byCategory.filter(p => p.Product_Category == CatID))
                    .do(data => console.log("Result of getByCategory service called"))
                    .do(data => console.table(data));
    }

    getInventoryDetail(SKU: number): Observable<IProductInventory[]> {
        console.log("product-inventory.service: getInventoryDetail is called")
        return this.getInventory()
                .map((detail: IProductInventory[]) => detail.filter(p => p.SKU == SKU))
                .do(data => console.log("Result of getInventoryDetail service called"))
                .do(data => console.table(data));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }




} //end of class