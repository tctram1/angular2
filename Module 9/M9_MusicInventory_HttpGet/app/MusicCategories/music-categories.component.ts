import { Component, OnInit } from '@angular/core';

import { IMusicCategory } from './music-categories';
import { MusicCategoryService } from './music-categories.service';

@Component({
    selector: 'sel-musiccategories',

    templateUrl: 'app/MusicCategories/music-categories.component.html'
})

export class MusicCategoriesComponent implements OnInit {
    tableTitle: string = 'Music Categories';

    musicCategories: IMusicCategory[];

    //Constructor
    constructor(private _musicCategoryService: MusicCategoryService) {

    }

    //OnInit
    ngOnInit(): void {
        console.log('In OnInit');

        this.musicCategories = this._musicCategoryService.getCategory();
    }




}//end of class