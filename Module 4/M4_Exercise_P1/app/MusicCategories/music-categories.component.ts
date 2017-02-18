import { Component } from '@angular/core';

@Component({
    selector: 'sel-musiccategories',

    templateUrl: 'app/MusicCategories/music-categories.component.html'
})

export class MusicCategoriesComponent {
    tableTitle: string = 'Music Categories';

    musicCategories: any[] = [
        {
            "categoryCode": 1,
            "categoryName": "Rock"
        },

        {
            "categoryCode": 2,
            "categoryName": "Pop"
        },

        {
            "categoryCode": 4,
            "categoryName": "Jazz"
        },

        {
            "categoryCode": 5,
            "categoryName": "Country"
        }
    ];
}