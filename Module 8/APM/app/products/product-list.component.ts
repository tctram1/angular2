import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[] = [];

    constructor(private _productService: ProductService){

    };

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    //ngOnInit lifecycle hook provides a place to perform any component initialization
    //it's a great place to retrieve the data for the template
    ngOnInit(): void {
        console.log('In OnInit');
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }



} //end of class
