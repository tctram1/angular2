import { Injectable } from '@angular/core';

import { IMusicCategory } from './music-categories';

@Injectable(
    //optional
)

export class MusicCategoryService {
    getCategory(): IMusicCategory[] {
        return [
            {
                "categoryCode": "1",
                "categoryName": "Rock"
            },

            {
                "categoryCode": "2",
                "categoryName": "Pop"
            },

            {
                "categoryCode": "4",
                "categoryName": "Jazz"
            },

            {
                "categoryCode": "5",
                "categoryName": "Country"
            }
        ];
    }

}//end of class