import { Injectable } from '@angular/core';

import { IProductCategory } from './product-category';

@Injectable(
    //optional
)

export class ProductCategoryService {
    getCategory(): IProductCategory[] {
        return [
            {
                "CatID": 1,
                "CatName": "Accessories"
            },

            {
                "CatID": 2,
                "CatName": "Coats & Jackets"
            },

            {
                "CatID": 3,
                "CatName": "Denim"
            },

            {
                "CatID": 4,
                "CatName": "Dresses"
            },

            {
                "CatID": 5,
                "CatName": "Hoodies & Sweatshirts"
            }
        ];
    }



}//end of class