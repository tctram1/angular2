import { Component, OnInit } from '@angular/core';

import { IProductCategory } from './product-category';
import { ProductCategoryService } from './product-category.service';

@Component({
    selector: 'sel-productcategory',

    templateUrl: 'app/ProductCategory/product-category.component.html'
})

export class ProductCategoryComponent implements OnInit {
    tableTitle: string = 'Product Category';

    productCategory: IProductCategory[];

    constructor(private _productCategoryService: ProductCategoryService) {}

    ngOnInit(): void {
        console.log('In OnInit');
        this.productCategory = this._productCategoryService.getCategory();
    }




} //end of class